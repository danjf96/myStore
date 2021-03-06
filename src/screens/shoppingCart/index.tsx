import React, { useState } from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { GlobalStyle } from '../../assets/GlobalStyles'
import Container from '../../components/Container'
import InfoModal from '../../components/InfoModal'
import ProductCard from '../../components/ProductCard'
import { changeShoppingCart } from '../../store/ducks/shoppingCart'
import { formatMoney } from '../../utils/mask'
import Styles from './styles'

const ShoppingCart = (props:any) => {

    const dispatch = useDispatch()
    const { shoppingCart: { cart,  totalPrice } } = useSelector( ({ shoppingCart  } ) => ({  shoppingCart }) )
    const [ openModal, setOpenModal ] = useState(false)

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

    const finish = (type: 'creditCard' | 'balance') => {
        dispatch( changeShoppingCart({ payment: type }))
        setOpenModal(false)
        props.navigation.navigate('Finish')
    }

    return (
        <>
            <Container style={{ height: '100%', paddingBottom: 120}}>
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

                <InfoModal  
                    testID='finishModal'
                    visible={openModal}
                    title={'Finalizar compra!'} 
                    text={'Escolha uma forma de pagamento'} 
                    textButton={'USAR CART??O CADASTRADO'} 
                    textSecondButton='USAR SALDO DISPONIVEL' 
                    onPress={() => finish('creditCard')} 
                    onPressSecondButton={() => finish('balance')}
                    onClose={ () => setOpenModal(false)}
                />  

            </Container>

            <View style={Styles.footer}>
                <TouchableOpacity style={Styles.buttonTwo} onPress={ () => props.navigation.navigate('Home')} >
                    <Text style={Styles.buttonTextTwo}>CONTINUAR COMPRANDO</Text>
                </TouchableOpacity>

                <TouchableOpacity style={Styles.button} onPress={ () => setOpenModal(true)} >
                    <Text style={Styles.buttonText}>FINALIZAR COMPRA</Text>
                </TouchableOpacity>
            </View>
            
        </>

    )
}

export default ShoppingCart