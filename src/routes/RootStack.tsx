import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign'

//ROUTES
import Splash from '../screens/splash';
import Home from '../screens/home';
import { Image } from 'react-native';

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
            {/* <Tab.Screen name="ShoppingCart" component={() => null}  /> */}
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