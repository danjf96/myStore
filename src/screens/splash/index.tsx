import React from 'react'
import { Image, View } from 'react-native'
import { LOGO } from '../../assets/GlobalStyles'
import Styles from './styles'
import * as Animatable from 'react-native-animatable';

const Splash = (props:any) => {

    const endAnimation = (e:any) => {
        //console.log('END ANIMATION', e)
        e.finished && props.navigation.navigate('BottomTabs')
    }

    return (
        <View style={Styles.container}>
            
            <Animatable.Image 
                source={LOGO} 
                style={Styles.image}
                animation={'lightSpeedIn'}
                onAnimationEnd={endAnimation}
                duration={1200}
                testID={'animation'}
            />

        </View>
    )
}

export default Splash