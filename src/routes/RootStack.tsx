import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign'

//ROUTES
import Splash from '../screens/splash';
import Home from '../screens/home';
import ShoppingCart from '../screens/shoppingCart';
import { View } from 'react-native';
import Circle from '../components/Circle';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const BottomTabs = () => {

    return (
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen 
                name="Home" 
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Icon
                            name="home"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
            <Tab.Screen 
                name="ShoppingCart" 
                component={ShoppingCart}
                options={{
                    tabBarLabel: 'Shopping Cart',
                    tabBarIcon: ({ color, size }) => (
                        <View>
                            <Icon
                                name="shoppingcart"
                                size={size}
                                color={color}
                            />
                            <Circle style={{ position: 'absolute', left: 25, top: -5 }} />
                        </View>
                    ),
                }}
            />
        </Tab.Navigator> 
    )
}

const RootStack = () => {

    return (       
        <Stack.Navigator
            initialRouteName="Splash"
            screenOptions={{ gestureEnabled: false, headerShown: false }}
        >
             <Stack.Screen
                name="BottomTabs"
                component={BottomTabs}
            /> 

            <Stack.Screen
                name="Splash"
                component={Splash}
            />  

        </Stack.Navigator>
    )
}

export default RootStack