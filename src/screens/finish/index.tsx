import { CommonActions } from '@react-navigation/core'
import React from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import Container from '../../components/Container'
import { formatMoney } from '../../utils/mask'
import Styles from './styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { cleanCart } from '../../store/ducks/shoppingCart'

const Finish = (props:any) => {
    const {  shoppingCart: { totalPrice, payment } } = useSelector( ({ shoppingCart  } ) => ({ shoppingCart }) )
    const dispatch = useDispatch()

    const finish = () => {
        dispatch(cleanCart())
        props.navigation.dispatch(CommonActions.reset({
            index: 0,
            routes: [
                { name: 'BottomTabs' }
            ],
        }))
    }

    return (
        <View style={Styles.container}>
            <Container style={{width: '100%' }}>
                <TouchableOpacity style={{ marginBottom: 40 }} onPress={finish}>
                    <Icon 
                        name='close'
                        size={30}
                        color={'white'}
                    />
                </TouchableOpacity>
                
                <Text style={Styles.title}>Compra finalizada com sucesso!</Text>
                

                {payment == 'creditCard'
                    ? <Text style={Styles.text}>Valor total de R$ {formatMoney(totalPrice)} debitado do cartão ***487</Text>
                    : <Text style={Styles.text}>Valor total de R$ {formatMoney(totalPrice)}. Saldo atual de R$ 585,00</Text>}

                <View style={{ width: '100%', flexDirection: 'column', alignItems: 'center' }}>
                    <Icon 
                        name='truck-delivery-outline'
                        size={60}
                        color={'white'}
                    />
                    <Text style={Styles.textTwo}>Sua compra chegará em até 3 dias úteis</Text>
                </View>

            </Container>
        </View>
    )
}

export default Finish