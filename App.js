import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SignInScreen from './src/Screens/SignInScreen';
import PlayingScreen from './src/Screens/PlayingScreen';
import SignUpScreen from './src/Screens/SignUpScreen';
import ConfirmSignUp from './src/Screens/ConfirmSignUp';
import ForgotPassword from './src/Screens/ForgotPassword';
import NewPassword from './src/Screens/NewPassword';
import Navigation from './src/Navigation';

export default function App() {
  return (
    <Navigation/>
  )
}