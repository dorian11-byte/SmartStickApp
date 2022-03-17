import React from 'react'
import { NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import welcomePage from './screens/welcomePage'
import register from './screens/register'
import login from './screens/login'



const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="welcomePage" component={welcomePage} />
          <Stack.Screen name="login" component={login} />
          <Stack.Screen name="register" component={register} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

 
export default App