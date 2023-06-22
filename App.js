import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SignInScreen from './src/Screens/SignInScreen';
import PlayingScreen from './src/Screens/PlayingScreen';
import SignUpScreen from './src/Screens/SignUpScreen';
import ConfirmSignUp from './src/Screens/ConfirmSignUp';
import ForgotPassword from './src/Screens/ForgotPassword';
import NewPassword from './src/Screens/NewPassword';
import Navigation from './src/Navigation';
import { Amplify } from '@aws-amplify/core';
import { Auth } from 'aws-amplify';
import config from './src/aws-exports';
import { AuthProvider } from './src/Context/AuthContext';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from './assets/colors';

Amplify.configure(config);

const App = () => {
  // Auth.signOut();
  return (
    <AuthProvider>
      
        <Navigation />
      
      
    </AuthProvider>
  )
}

export default App;