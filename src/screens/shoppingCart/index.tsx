import React, { useEffect, useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { GlobalStyle } from '../../assets/GlobalStyles'
import Container from '../../components/Container'
import ProductCard from '../../components/ProductCard'
import { changeShoppingCart } from '../../store/ducks/shoppingCart'
import { formatMoney } from '../../utils/mask'
import Styles from './styles'

const ShoppingCart = (props:any) => {

    const dispatch = useDispatch()
    const { shoppingCart: { cart, loading, totalPrice } } = useSelector( ({ shoppingCart  } ) => ({  shoppingCart }) )
    
    const changeQuantity = (type: string, id:string) => {
        let newCart = cart
        switch(type){
            case 'increase':
                newCart = newCart.map( n => n.id == id ? { ...n, number: n.number += 1 } : n )
            break;
            case 'decrease':
                if(newCart.find( n => n.id == id && n.number - 1 == 0))
                    newCart = newCart.filter( n => n.id != id)
                else
                    newCart = newCart.map( n => n.id == id ? { ...n, number: n.number -= 1 } : n )
            break
        }
        const totalPrice = newCart.length > 0 ? newCart.map( n => n.price * n.number).reduce( (a,b) => a+b) : 0
        dispatch( changeShoppingCart({ cart: newCart, totalPrice }))

    }

    return (
        <Container>
            <Text style={Styles.price}> Total: R$ {formatMoney(totalPrice)}</Text>

            <View style={GlobalStyle.line}></View>
            
            <FlatList 
                renderItem={ ({ item, index}) => <ProductCard 
                        {...item}
                        testId={'cart'}
                        quantity={true}
                        styleContainer={Styles.productContainer}
                        onPressQuantity={ t => changeQuantity(t, item.id)}
                    />
                }
                keyExtractor={ (item,index) => `cart${index}`}
                data={cart}
            />     
        </Container>
    )
}

export default ShoppingCart