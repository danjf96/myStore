import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign'

//ROUTES
import Splash from '../screens/splash';
import Home from '../screens/home';
import ShoppingCart from '../screens/shoppingCart';
import Circle from '../components/Circle';
import Colors from '../assets/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const BottomTabs = () => {

    return (
        <Tab.Navigator initialRouteName="Home" screenOptions={{
            headerStyle: {
                backgroundColor: Colors.principal
            } ,
            headerTitleStyle: {
                color: Colors.textSecondary
            }
        }}>
            <Tab.Screen 
                name="Home" 
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <TouchableOpacity>
                            <Icon
                                name="home"
                                size={size}
                                color={color}
                            />
                        </TouchableOpacity>
                    ),
                }}
            />
            <Tab.Screen 
                name="ShoppingCart" 
                component={ShoppingCart}
                options={{
                    tabBarLabel: 'Shopping Cart',
                    tabBarIcon: ({ color, size }) => (
                        <>
                            <TouchableOpacity>
                                <Icon
                                    name="shoppingcart"
                                    size={size}
                                    color={color}
                                />
                            </TouchableOpacity>
                            <Circle style={{ position: 'absolute', right: '35%', top: -5 }} />
                        </>
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