import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../../components/ProductCard'
import { getProducts } from '../../store/ducks/products'

const Home = () => {
    
    const dispatch = useDispatch()
    const { products } = useSelector( ({ products  } ) => ({ products }) )

    useEffect( () => {
        dispatch(getProducts())
    }, [])
    // console.log(products)
    return <>
        {!products.loading && <ProductCard 
            {...products.listProducts[0]}
        />}
    </>
}

export default Home