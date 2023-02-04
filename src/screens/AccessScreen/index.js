import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function AccessScreen() {

  const navigation = useNavigation()

  const toLogin = () => {
    console.log('apertei botao para login');
    navigation.navigate('Login')
  }

 return (
    <View style={styles.container}>

      <Image 
      style={styles.image}
      source={require('../../../assets/dog.png')}/>

      <Text style={styles.title}>Quem bom te ver aqui!</Text>

      <Text style={styles.textQuestion}>Como deseja acessar?</Text>

      <TouchableOpacity style={styles.btnGoogle}>
        <Image source={require('../../../assets/googleIcon.png')} style={styles.googleIcon}/>
        <Text style={styles.textGoogle}>Acessar com sua conta Google</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.btn}
        onPress={toLogin}
      >
        <Text style={styles.textBtn}>Outras formas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.linkSignup}>
        <Text>Não tem uma conta? <Text style={styles.signup}>Cadastre-se</Text></Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 30,
  },
  image: {
    marginBottom: 30
  },
  title: {
    color: '#000',
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 10
  },
  textQuestion: {
    color: '#000',
    fontSize: 14,
    marginBottom: 50
  },
  btnGoogle: {
    backgroundColor: '#400505',
    width: 380,
    height: 65,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 16
  },
  textGoogle: {
    color: '#FFF',
  },
  googleIcon: {
    width: 40,
    height: 40,
    marginLeft: -50,
    marginRight: 40
  },
  btn: {
    backgroundColor: 'transparent',
    width: 380,
    height: 65,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#B0B0B0',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 120
  },
  signup: {
    color: '#400505',
    fontWeight: 'bold'
  }
})