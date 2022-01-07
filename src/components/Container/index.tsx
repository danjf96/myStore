
import React from 'react'
import { SafeAreaView, View } from 'react-native'
import Styles from './styles'
import { PROPSCONTAINER } from './types'

const Container = (props:PROPSCONTAINER) => {
    return (
        <SafeAreaView>
            <View {...props} style={{ ...Styles.container, ...props.style}} />
        </SafeAreaView>
    )
}

export default Container