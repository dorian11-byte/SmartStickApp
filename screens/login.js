import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, Alert } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'

import Layout from '../components/Layout' 

export class login extends Component {
  render() {
    return (
      <Layout>
        <Text> Login Screen </Text>
      </Layout>
    )
  }
}

export default login
