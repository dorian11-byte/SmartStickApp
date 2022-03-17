import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, Alert } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import { FontAwesome } from '@expo/vector-icons';

import Layout from '../components/Layout' 


export class welcomePage extends Component {
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
          <FontAwesome.Button name="envelope" backgroundColor="#575DFB"  onPress={() => this.props.navigation.navigate('register')}>
            Continue with email
          </FontAwesome.Button>
        </View>
        <View style={styles.button2}>
          <FontAwesome.Button name="google" backgroundColor="red"  onPress={() => this.props.navigation.navigate('register')}>
            Continue with google
          </FontAwesome.Button>
        </View>
        <Text style={styles.log}> Already have an account? </Text>

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
      lineHeight: 29,
    },

    step: {
      position: 'absolute',
      top: 284,
      color: '#575DFB',
      left: 15,
      fontSize: 40,
      fontWeight: 700,
    },

    slogan: {
      position: 'absolute',
      top: 338,
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: 19,
      fontFamily: 'Arial',
    },
    
    started: {
      position: 'absolute',
      top: 431,
      fontStyle: 'normal',
      fontSize: 17.317,
      fontWeight: 'bold',
    },

    button1:{
      position: 'absolute',
      top: 487,
      width: 343,
      height: 56,
    },

    button2:{
      position: 'absolute',
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
});

export default welcomePage
