import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'


import Layout from '../components/Layout' 


export class WelcomePage extends Component {
  render() {
    return (
      <Layout>

        <Text style={styles.welcome}> Welcome to</Text>
        <Text style={styles.step}> S.T.E.P. </Text>
        <Text style={styles.slogan}> A place where you can track
              all your Smart Stick 
        </Text>
        <Text style={styles.started}> Let's get started! </Text>
        <View style={styles.button1}>
          <FontAwesome.Button name="at" backgroundColor="blue"  onPress={() => this.props.navigation.navigate('Login')}>
            Continue with email
          </FontAwesome.Button>
        </View>
        <View style={styles.button2}>
          <FontAwesome.Button name="google" backgroundColor="red"  onPress={() => this.props.navigation.navigate('Login')}>
            Continue with google
          </FontAwesome.Button>
        </View>
        <Text style={styles.log}> Don't have an account? </Text> 
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
          <Text style={styles.link}>Register</Text> 
        </TouchableOpacity>

      </Layout>
    )
  }
}

const styles = StyleSheet.create({
    welcome: {
      position: 'absolute',
      top: 255,
      fontFamily: 'Arial',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 24,
      lineHeight: 30,
      left: 30,
    },

    step: {
      position: 'absolute',
      top: 284,
      color: '#575DFB',
      left: 30,
      fontSize: 40,
      fontWeight: '800', 
    },

    slogan: {
      position: 'absolute',
      top: 338,
      fontStyle: 'normal',
      fontWeight: "400",
      fontSize: 19,
      left: 30,
      fontFamily: 'Arial',
    },
    
    started: {
      position: 'absolute',
      top: 431,
      fontStyle: 'normal',
      left: 30,
      fontSize: 17.317,
      fontWeight: 'bold',
    },

    button1:{
      position: 'absolute',
      left: 18,
      top: 487,
      width: 343,
      height: 36,
    },

    button2:{
      position: 'absolute',
      left: 18,
      top: 542,
      width: 343,
      height: 56,
    },

    log: {
      position: 'absolute',
      top: 622,
      textAlign: 'center',
      left: 55,
      fontSize: 16,
      fontWeight: 'bold',
    },

    link: {
      position: 'absolute',
      top: 603,
      textAlign: 'center',
      left: 225,
      fontSize: 16,
      fontWeight: 'bold',
      color: 'blue',
      textDecorationLine: 'underline',
    },
});

export default WelcomePage
