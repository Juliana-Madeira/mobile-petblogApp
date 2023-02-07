import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

export default function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation()

  const handleSignup = () => {
    console.log('apertei no botao de cadastrar')
  }

 return (
  <View style={styles.container}>
  <KeyboardAvoidingView style={styles.keyboardView}>
    <View style={styles.viewIcon}>
      <Icon
      name='keyboard-arrow-left'
      size={48}
      color='#D95436'
      style={styles.icon}
      onPress={() => navigation.navigate('Login')}
      />
      <Text style={styles.title}>Cadastre-se</Text>
    </View>
    <View style={styles.input}>
      <TextInput 
      placeholder='Nome'
      autoCorrect={false}
      style={styles.textInput}
      placeholderTextColor='#BDBDBD'
      value={name}
      onChangeText={(text) => setName(text)}
      />
    </View>
    <View style={styles.input}>
      <TextInput 
      placeholder='Email'
      autoCapitalize='none'
      autoCorrect={false}
      style={styles.textInput}
      placeholderTextColor='#BDBDBD'
      value={email}
      onChangeText={(text) => setEmail(text)}
      />
    </View>
    <View style={styles.input}>
      <TextInput 
      placeholder='Senha'
      autoCapitalize='none'
      autoCorrect={false}
      style={styles.textInput}
      placeholderTextColor='#BDBDBD'
      secureTextEntry={true}
      value={password}
      onChangeText={(text) => setPassword(text)}
      />
    </View>
    <TouchableOpacity style={styles.buttonLogin} onPress={handleSignup}>
      <Text style={styles.textButtonLogin}>Cadastrar</Text>
    </TouchableOpacity>
    {/* <TouchableOpacity style={styles.forgotPassword}>
      <Text>Esqueci minha senha</Text>
    </TouchableOpacity> */}
    <View style={styles.rowLine}>
      <Text style={styles.line}>----------</Text>
      <View >
      <Text>Ou continue com</Text>
      </View>
      <Text style={styles.line}>----------</Text>
    </View>
    <View style={styles.iconsToLogin}>
      <TouchableOpacity>
        <Image source={require('../../../assets/googleIcon.png')} style={styles.googleIcon}/>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={require('../../../assets/facebookIcon.png')} style={styles.googleIcon}/>
      </TouchableOpacity>
    </View>
    <View style={styles.textFooter}>
      <Text style={styles.textNotHaveAccount}>Já tem uma conta? </Text>
      <Text style={styles.textSignUp} onPress={() => {navigation.navigate('Login')}}>Login</Text>
    </View>
  </KeyboardAvoidingView>
 </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  keyboardView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  },
  viewIcon: {
    marginLeft: -200,
    marginBottom: 32,
    alignItems: 'flex-start'
  },
  icon: {
    marginLeft: 8,
    marginBottom: 10,
    alignItems: 'flex-start'
  },
  title: {
    fontSize: 30,
    marginLeft: 22,
    fontWeight: '600'
  },
  input: {
    flexDirection: 'row'
  },
  textInput: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#ECE6E6',
    width: '90%',
    height: 65,
    marginBottom: 15,
    borderRadius: 7
  },
  buttonLogin: {
    backgroundColor: '#400505',
    borderRadius: 8,
    height: 65,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 50
  },
  textButtonLogin: {
    color: '#FFF',
    fontSize: 16
  },
  forgotPassword: {
    marginBottom: 50,
  },
  rowLine: {
    flexDirection: 'row',
    marginBottom: 30
  },
  line: {
    color: '#a9a9a9',
    marginLeft: 8,
    marginRight: 8
  },
  iconsToLogin: {
    flexDirection: 'row',
    marginBottom: 70
  },
  googleIcon:{
    width: 58,
    height: 58,
    marginRight: 8,
    marginLeft: 8
  },
  textSignUp: {
    color: '#400505',
    fontWeight: 'bold',
  },
  textFooter: {
    flexDirection: 'row'
  }
  
})