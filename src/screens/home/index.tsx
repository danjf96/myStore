import React, { useEffect } from 'react'
import { ActivityIndicator, RefreshControl } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import Container from '../../components/Container'
import ProductCard from '../../components/ProductCard'
import { getProducts } from '../../store/ducks/products'
import Styles from './styles'

const Home = () => {
    
    const dispatch = useDispatch()
    const { products: { loading, listProducts } } = useSelector( ({ products  } ) => ({ products }) )
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = () => refreshing && getList()

    const getList = () => dispatch(getProducts())

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
    </Container>
}

export default Home