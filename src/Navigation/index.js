import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignInScreen from '../Screens/SignInScreen';
import PlayingScreen from '../Screens/PlayingScreen';
import SignUpScreen from '../Screens/SignUpScreen';
import ConfirmSignUp from '../Screens/ConfirmSignUp';
import ForgotPassword from '../Screens/ForgotPassword';
import NewPassword from '../Screens/NewPassword';
import Home from '../Screens/Home';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Playing" component={PlayingScreen} />
        <Stack.Screen name="ConfirmSignUp" component={ConfirmSignUp} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="NewPassword" component={NewPassword} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation