import React from 'react'
import { NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import WelcomePage from './screens/WelcomePage'
import Register from './screens/Register'
import Login from './screens/Login'


const Stack = createStackNavigator()

const App = () => { 
  return (
    <NavigationContainer> 
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="WelcomePage" component={WelcomePage} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

 
export default App