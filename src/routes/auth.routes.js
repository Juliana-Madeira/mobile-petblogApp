import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AccessScreen from '../screens/AccessScreen';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';

//crio a stack
const AuthStack = createStackNavigator();

export default function AuthRoutes(){
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen name='AccessScreen' component={AccessScreen} options={{headerShown: false}}/>
            <AuthStack.Screen name='Login' component={Login} options={{headerShown: false}}/>
            <AuthStack.Screen name='SignUp' component={SignUp} options={{headerShown: false}}/>
        </AuthStack.Navigator>
    )
}