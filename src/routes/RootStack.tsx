import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

//ROUTES
import Splash from '../screens/splash';

const Stack = createStackNavigator();

const RootStack = () => {

        return (
        <Stack.Navigator
            initialRouteName="Splash"
            screenOptions={{ gestureEnabled: false, headerShown: false }}
        >
            
            <Stack.Screen
                name="Splash"
                component={Splash}
            />  

        </Stack.Navigator>
    )
}

export default RootStack