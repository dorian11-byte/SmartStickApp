import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, Alert } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'

import Layout from '../components/Layout' 

export class Login extends Component {
  render() {
    return (
      <Layout>
        <Text> Login Screen </Text>
      </Layout>
    )
  }
}

export default Login
