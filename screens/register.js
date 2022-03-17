import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, Alert } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'

import Layout from '../components/Layout' 

export class register extends Component {
  render() {
    return (
      <Layout>
        <Text> Register Screen </Text>

        <Button
          title="Back to home Screen"
          onPress={() =>
            this.props.navigation.navigate('welcomePage')
          }
        />
      </Layout>
    )
  }
}

export default register
