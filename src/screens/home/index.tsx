import { useNavigation } from '@react-navigation/core'
import React, { useEffect } from 'react'
import { ActivityIndicator, RefreshControl } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import Container from '../../components/Container'
import InfoModal from '../../components/InfoModal'
import ProductCard from '../../components/ProductCard'
import { getProducts } from '../../store/ducks/products'
import Styles from './styles'

const Home = (props: any) => {
    
    const dispatch = useDispatch()
    const { products: { loading, listProducts }, shoppingCart: { cart } } = useSelector( ({ products, shoppingCart  } ) => ({ products, shoppingCart }) )
    const [refreshing, setRefreshing] = React.useState(false);
    const [visible, setVisible] = React.useState(false);

    const onRefresh = () => refreshing && getList()

    const getList = () => dispatch(getProducts())

    const changeVisible = () => setVisible(!visible)

    const next = () => {
        changeVisible()
        props.navigation.navigate('ShoppingCart')
    }

    const pressProduct = (product:any) => {
        let newCart = cart
        if(cart.find( v => v.id == product.id)) {
            newCart = newCart.map( v => v.id == product.id ? { ...v, quantity: v.quantity += 1 } : v)
        } else 
            newCart.push({...product, quantity: 1 })

        changeVisible()
    }

    useEffect( () => {
       getList()
    }, [])

    useEffect( () => {
        refreshing && setRefreshing(false)
    }, [refreshing])

    return <Container>
       
        <FlatList 
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
            
        />        

        {loading && <ActivityIndicator size={'large'} testID='loading'/>}

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