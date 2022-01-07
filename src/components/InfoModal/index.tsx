
import React from 'react'
import { Modal, Text, TouchableOpacity, View } from 'react-native'
import { Image } from 'react-native-animatable'
import Styles, { StylesFooter } from './styles'
import { PROPSMODALINFO } from './types'
import Icon from 'react-native-vector-icons/AntDesign'
import Colors from '../../assets/Colors'

const InfoModal = (props:PROPSMODALINFO) => {
    const { image, text, title, textButton = 'OK, ENTENDI', onPress, visible } = props
    return (
        <>
            <Modal 
                animationType="fade"
                transparent={true}
                visible={visible}
                {...props}
            >
                <View style={Styles.modal}>
                    <View style={Styles.containerBackground}></View>

                    <View style={Styles.containerTwo}>

                        <View style={Styles.container}>
                            {props.onClose && 
                            <TouchableOpacity style={{ position: 'absolute', zIndex: 99, right: 10, top: 10}} onPress={props.onClose}>
                                <Icon 
                                    name='close'
                                    size={25}
                                    color={Colors.principal}
                                />
                            </TouchableOpacity>}
                            {image && <Image style={Styles.image} source={image} /> }

                            <Text style={Styles.title}>{title}</Text>

                            <Text style={Styles.text}>{text}</Text>

                            <View style={StylesFooter.container}>

                                <TouchableOpacity style={StylesFooter.style} onPress={onPress}>
                                    <Text style={StylesFooter.textStyle}>{textButton}</Text>
                                </TouchableOpacity>

                                {
                                props.textSecondButton != undefined && props.textSecondButton != '' && 
                                    <TouchableOpacity style={StylesFooter.styleSecond} onPress={props.onPressSecondButton}>
                                        <Text style={StylesFooter.textSecondStyle}>{props.textSecondButton}</Text>
                                    </TouchableOpacity>
                                }

                            </View>
                        

                        </View>
                    </View>
                </View>            
            </Modal>
        </>
    )
}


export default InfoModal