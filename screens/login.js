import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, Alert, TouchableOpacity, TextInput  } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'

import Layout from '../components/Layout' 

const Login = ({navigation}) => {
  //render() {
    
  return (
      <Layout>
        <View style={styles.Arrow}>
          <TouchableOpacity onPress={() => navigation.navigate('WelcomePage')}>
            <AntDesign name="arrowleft" size={38} color="black"/>
          </TouchableOpacity>
        </View>

        <Text style={styles.log}> Login </Text>
        <Text style={styles.desc}>Login now to track all your smart stick with your relatives.</Text>
        <Text style={styles.email}>Email</Text>
        <TextInput style={styles.InputMail}> <Entypo name="email" size={18} color="#575DFB"/></TextInput>
        <Text style={styles.pwd}> Your Password</Text>
        <TextInput style={styles.InputPwd} placeholder="Ex: *********"> <MaterialIcons name="lock-outline" size={18} color="#575DFB" /></TextInput>

        <TouchableOpacity style={styles.ButtonRegister}>
          <Text style={styles.ButtonTxt}> Login </Text>
        </TouchableOpacity>

        <Text style={{color:'black', position: 'absolute', top: 560, padding: 0, left: 40, textAlign: 'center'}}>_______________________________________</Text>

        <TouchableOpacity style={styles.ButtonGoogle}>
          <Text style={styles.TxtGoogle}> Continue with Google</Text>
        </TouchableOpacity>

        <Text style={styles.dont}> Don't have an account? </Text> 
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.link}> Register </Text> 
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

    log:{
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

    pwd: {
      position: 'absolute',
      padding: 30,
      left: 10,
      top: 325,
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

    InputPwd: {
      position: 'absolute',
      padding: 15,
      left: 35,
      top: 385,
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
      top: 490,
      width: '90%',
      borderRadius: 20,
      backgroundColor: '#575DFB'
    },

    ButtonTxt:{
      color: '#ffff',
      textAlign: 'center',
      fontSize: 18, 
    },

    ButtonGoogle:{
      position: 'absolute',
      padding: 15,
      left: 35,
      top: 600,
      width: '90%',
      backgroundColor: '#e5e5e5',
      fontSize: 14,
      borderWidth: 1.5,
      borderColor: 'black', 
      borderRadius: 20,
    },

    TxtGoogle:{
      color: 'black',
      textAlign: 'center',
      fontSize: 16,
      fontWeight: 'bold', 
    },

    dont:{
      position: 'absolute',
      top: 672,
      textAlign: 'center',
      left: 70,
      fontSize: 14,
      fontWeight: 'bold',
    },

    link: {
      position: 'absolute',
      top: 652,
      left: 215,
      fontSize: 14,
      fontWeight: 'bold',
      color: 'blue',
      textDecorationLine: 'underline',
    },

});

export default Login
