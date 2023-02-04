import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Login() {
 return (
   <View style={styles.container}>
    <Text>Tela de Login</Text>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    alignItems: 'center'
  }
})