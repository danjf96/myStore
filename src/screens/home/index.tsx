import { useNavigation } from '@react-navigation/core'
import React, { useEffect } from 'react'
import { ActivityIndicator, RefreshControl, View } from 'react-native'
import { FlatList, TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import Container from '../../components/Container'
import InfoModal from '../../components/InfoModal'
import ProductCard from '../../components/ProductCard'
import { getProducts } from '../../store/ducks/products'
import { changeShoppingCart } from '../../store/ducks/shoppingCart'
import Styles from './styles'
import Icon from 'react-native-vector-icons/AntDesign'
import Colors from '../../assets/Colors'

const Home = (props: any) => {
    
    const dispatch = useDispatch()
    const { products: { loading, listProducts }, shoppingCart: { cart } } = useSelector( ({ products, shoppingCart  } ) => ({ products, shoppingCart }) )
    const [refreshing, setRefreshing] = React.useState(false);
    const [visible, setVisible] = React.useState(false);
    const [search, setSearch] = React.useState('');

    const onRefresh = () => refreshing && getList()

    const getList = () => dispatch(getProducts(search))

    const changeVisible = () => setVisible(!visible)

    const next = () => {
        changeVisible()
        props.navigation.navigate('ShoppingCart')
    }

    const pressProduct = (product:any) => {
        let newCart = cart
        if(cart.find( v => v.id == product.id)) {
            newCart = newCart.map( v => v.id == product.id ? { ...v, number: v.number += 1 } : v)
        } else 
            newCart.push({...product, number: 1 })


        const totalPrice = newCart.length > 0 ? newCart.map( n => n.price * n.number).reduce( (a,b) => a+b) : 0
        dispatch(changeShoppingCart({ cart: newCart, totalPrice }))
        changeVisible()
    }

    useEffect( () => {
       getList()
    }, [])

    useEffect( () => {
        refreshing && setRefreshing(false)
    }, [refreshing])

    return <Container>

        <View style={Styles.containerSearch}> 
            <TextInput 
                testID='input' 
                value={search} 
                onChangeText={ text => setSearch(text)} 
                style={Styles.input}
                placeholder='Search'
            />

            <TouchableOpacity style={Styles.button} testID='searchButton' onPress={() => getList()}>
                <Icon
                    name="search1"
                    size={20}
                    color={'white'}
                />
            </TouchableOpacity>
        </View>
       
       <View style={Styles.line}></View>

       {!loading && 
            <FlatList 
                keyboardShouldPersistTaps='always'
                renderItem={ ({ item, index}) => <ProductCard 
                        {...item}
                        testId={'product'}
                        styleContainer={Styles.productContainer}
                        onPress={() => pressProduct(item)}
                    />
                }
                keyExtractor={ (item,index) => `product${index}`}
                data={listProducts}
                refreshControl={ <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                />}
                
            /> }       

        {loading && <ActivityIndicator size={'large'} testID='loading' color={Colors.principal}/>}

        <InfoModal  
            testID='InfoModal'
            visible={visible}
            title={'Atenção!'} 
            text={'Deseja continuar comprando ou ir para o carrinho?'} 
            textButton={'CARRINHO'} 
            textSecondButton='CONTINUAR COMPRA' 
            onPress={next} 
            onPressSecondButton={changeVisible}
        />     
    </Container>
}

export default Home