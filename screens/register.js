import React, { Component, useState } from 'react'
import { Text, View, StyleSheet, Button, Alert, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons'


import Layout from '../components/Layout' 

const Register = ({navigation}) => {

  //render() {

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

      const handleSignUp = () => {
        app
        .createUserWithEmailandPassword(email, password)
        .then(userCredentials => {
          const user = userCredentials.user;
          console.log(user.email)
        }).catch(error => alert(error.message))
      }
    
    return (

      <Layout>

        <View style={styles.Arrow}>
          <TouchableOpacity onPress={() => navigation.navigate('WelcomePage')}>
            <AntDesign name="arrowleft" size={38} color="black"/>
          </TouchableOpacity>
        </View>

        <Text style={styles.reg}> Register </Text>
        <Text style={styles.desc}>Create an <Text style={{color: '#575DFB', fontWeight: 'bold'}}>account </Text>to acces all the features of S.T.E.P</Text>
        <Text style={styles.email}>Email</Text>
        <TextInput 
          style={styles.InputMail}
          placeholder="abc@example.com"
          value={ email }
          onChangeText={text => setEmail(text) }             

          ></TextInput>
        <Text style={styles.name}>Your Name</Text>
        <TextInput 
          style={styles.InputName} 
          placeholder="Ex: Dorian Raygoza"
          value={ name }
          onChangeText={text => setName(text) }       
          
          ></TextInput>
        <Text style={styles.pwd}> Your Password</Text>
        <TextInput 
          style={styles.InputPwd} 
          placeholder="Ex: *********"
          value={ password }
          onChangeText={text => setPassword(text) } 
          //secureTextEntry 
          ></TextInput>

        <TouchableOpacity 
          style={styles.ButtonRegister}
          onPress = {handleSignUp}
        >
          <Text style={styles.ButtonTxt}>Register</Text>
        </TouchableOpacity>

        <Text style={styles.log}> Already have an account? </Text> 
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.link}>Login</Text> 
        </TouchableOpacity>

      </Layout>
    )
  //}
}

const styles = StyleSheet.create({
    Arrow:{
      position: 'absolute',
      padding: 30,
      top: 32,
    },

    reg:{
      position: 'absolute',
      padding: 30,
      top: 90,
      fontSize: 38,
      fontWeight: 'bold',
      color: '#575DFB'
    },

    desc:{
      position: 'absolute',
      padding: 30,
      left: 10,
      top: 140,
      fontSize: 18,
    },

    email: {
      position: 'absolute',
      padding: 30,
      left: 10,
      top: 215,
      fontSize: 17,
    },

    name: {
      position: 'absolute',
      padding: 30,
      left: 10,
      top: 320,
      fontSize: 17,
    },

    pwd: {
      position: 'absolute',
      padding: 30,
      left: 10,
      top: 425,
      fontSize: 17,
    },

    InputMail: {
      position: 'absolute',
      padding: 15,
      left: 35,
      top: 275,
      width: '90%',
      backgroundColor: '#e5e5e5',
      fontSize: 14,
      borderWidth: 1.5,
      borderColor: '#575DFB', 
      borderRadius: 20,
    },
    
    InputName: {
      position: 'absolute',
      padding: 15,
      left: 35,
      top: 380,
      width: '90%',
      backgroundColor: '#e5e5e5',
      fontSize: 14,
      borderWidth: 1.5,
      borderColor: '#575DFB', 
      borderRadius: 20,
    }, 

    InputPwd: {
      position: 'absolute',
      padding: 15,
      left: 35,
      top: 485,
      width: '90%',
      backgroundColor: '#e5e5e5',
      fontSize: 14,
      borderWidth: 1.5,
      borderColor: '#575DFB', 
      borderRadius: 20,
    }, 

    ButtonRegister:{
      position: 'absolute',
      padding: 18,
      paddingTop: 20,
      left: 35,
      top: 575,
      width: '90%',
      borderRadius: 20,
      backgroundColor: '#575DFB'
    },

    ButtonTxt:{
      color: '#ffff',
      textAlign: 'center',
      fontSize: 18, 
    },
    
    log: {
      position: 'absolute',
      top: 672,
      textAlign: 'center',
      left: 55,
      fontSize: 14,
      fontWeight: 'bold',
    },

    link: {
      position: 'absolute',
      top: 652,
      left: 220,
      fontSize: 14,
      fontWeight: 'bold',
      color: 'blue',
      textDecorationLine: 'underline',
    },

});

export default Register
