import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useNavigation } from '@react-navigation/native';

import AccessScreen from './src/screens/AccessScreen';
import Login from './src/screens/Login';


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='AccessScreen' 
          component={AccessScreen} 
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name='Login' 
          component={Login} 
          options={{
            headerShown: false
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
