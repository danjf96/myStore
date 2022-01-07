import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { formatMoney } from '../../utils/mask'
import Styles from './styles'
import { ProductsCardProps } from './types'

const ProductCard = ({
    name,
    image,
    price,
    stock,
    quantity = false,
    number = 0,
    onPressQuantity = () => null,
    testId,
    styleContainer,
    onPress
}:ProductsCardProps) => {
    const uri = image?.replace('http://lorempixel.com/640/480','https://loremflickr.com/160/120')

    return (
        <TouchableOpacity disabled={quantity} onPress={onPress} style={{...Styles.containerCard, justifyContent: quantity ? 'space-between' : 'flex-start', ...styleContainer}} testID={testId}>
            <TouchableOpacity disabled={!quantity} onPress={onPress} style={[Styles.containerButton,{ width: !quantity ? '100%' : '50%'}]}>
                <Image source={{ uri }} style={Styles.image} />

                <View>
                    <Text numberOfLines={1} style={Styles.name} ellipsizeMode='tail'>{name}</Text>
                    <Text numberOfLines={1} style={Styles.price} ellipsizeMode='tail'>R$ {formatMoney(price)}</Text>
                    {/* <Text style={Styles.name}>Disponivel: {stock}</Text> */}
                </View>
            </TouchableOpacity>

            {quantity && <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 15 }}>

                <TouchableOpacity onPress={ () => onPressQuantity('decrease')} style={{ padding: 10 }}>
                    <Text style={{ fontSize: 30 }}>-</Text>
                </TouchableOpacity>

                <Text style={{  padding: 8, borderWidth:1, borderRadius: 5 }}>{number}</Text>

                <TouchableOpacity onPress={ () => onPressQuantity('increase')}  style={{ padding: 10 }}>
                    <Text style={{ fontSize: 30 }}>+</Text>
                </TouchableOpacity>

            </View>}

        </TouchableOpacity>
    )
}

export default ProductCard