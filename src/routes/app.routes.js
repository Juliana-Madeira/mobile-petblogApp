import React from 'react';
import { createStackkNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';

//crio o Drawer
const AppStack = createStackNavigator();

export default function AppRoutes(){
    return(
        <AppStack.Navigator>
            <AppStack.Screen name='Home' component={Home}/>
        </AppStack.Navigator>
    )
}