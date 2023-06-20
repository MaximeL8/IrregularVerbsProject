import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../Screens/SignInScreen';
import PlayingScreen from '../Screens/PlayingScreen';
import SignUpScreen from '../Screens/SignUpScreen';
import ConfirmSignUp from '../Screens/ConfirmSignUp';
import ForgotPassword from '../Screens/ForgotPassword';
import NewPassword from '../Screens/NewPassword';
import Home from '../Screens/Home';
import { ActivityIndicator } from 'react-native';
import { AuthContext } from '../Context/AuthContext';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const user = React.useContext(AuthContext);

  if (user === undefined) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator />
      </View>
    );
  } else {
    console.warn('user:', user);
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Playing" component={PlayingScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="ConfirmSignUp" component={ConfirmSignUp} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="NewPassword" component={NewPassword} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
