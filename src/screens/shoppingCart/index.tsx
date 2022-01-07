import React from 'react'
import { FlatList, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Container from '../../components/Container'
import ProductCard from '../../components/ProductCard'
import { changeShoppingCart } from '../../store/ducks/shoppingCart'
import { CARTSTATE } from '../../store/ducks/shoppingCart/types'
import Styles from './styles'

const ShoppingCart = (props:any) => {

    const dispatch = useDispatch()
    const { shoppingCart: { cart, loading } } = useSelector( ({ shoppingCart  } ) => ({  shoppingCart }) )
    
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

        dispatch( changeShoppingCart({ cart: newCart }))

    }

    return (
        <Container>
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