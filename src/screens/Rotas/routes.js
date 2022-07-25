import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator } from "@react-navigation/native-stack"


// screnns
import Home from '../Home';
import Login from '../Login';

const window = createNativeStackNavigator();

export default function Rotas() {
    return (
        <NavigationContainer>
            <window.Navigator>

              <window.Screen 
              name="Login" component={Login} options={{ headerShown: false}} />

              <window.Screen 
              name="Home" options={{headerShown: false}} component={Home}/>
               
            </window.Navigator>
        </NavigationContainer>
    )
}




