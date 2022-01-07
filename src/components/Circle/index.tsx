import React from 'react'
import { Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import Styles from './styles'
import { CIRCLEPROPS } from './types'

const Circle = (props: CIRCLEPROPS) => {
    const { shoppingCart: { cart } } = useSelector( ({  shoppingCart  } ) => ({ shoppingCart }) )
    const visible = props.number != undefined ? props.number > 0 : cart.length > 0

    return(
        visible ? 
            <View style={{ ...Styles.container,...props.style }}>
                <Text style={{ ...Styles.text, ...props.styleText }}>{props.number || cart.map( c => c.number).reduce( (a,b) => a+b)}</Text>
            </View>
            : null
        
    )
}

export default Circle