import React, { useEffect } from 'react'
import { ActivityIndicator } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../../components/ProductCard'
import { getProducts } from '../../store/ducks/products'

const Home = () => {
    
    const dispatch = useDispatch()
    const { products: { loading, listProducts } } = useSelector( ({ products  } ) => ({ products }) )

    useEffect( () => {
        listProducts.length == 0 && dispatch(getProducts())
    }, [])
    // console.log(products)
    return <>
        {!loading && 
            listProducts.map( (product, index) => 
                <ProductCard 
                    {...product}
                    testId={'product'}
                />
            )
        }

        {loading && <ActivityIndicator size={'large'} testID='loading'/>}
    </>
}

export default Home