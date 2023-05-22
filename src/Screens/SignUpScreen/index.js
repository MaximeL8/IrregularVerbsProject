import { React, useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { styles } from './styles';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import PlayingScreen from '../PlayingScreen';
import CustomInput from '../../Components/CustomInput';
import CustomButton from '../../Components/CustomButton';
import SignLine from '../../Components/SignLine';
import { useNavigation } from '@react-navigation/native';

export default function SignUpScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigation = useNavigation();


  const [fontsLoaded] = useFonts({
    'Milky-Coffee': require('../../../assets/fonts/Milky-Coffee.ttf'),
    'Roboto-Bold': require('../../../assets/fonts/Roboto-Bold.ttf'),
  });
  
  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if(!fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }

  const onPressSignUp = () => {
    navigation.navigate('ConfirmSignUp');
  }

  const onPressLogIn = () => {
    navigation.navigate('SignIn');
  }

  return (
        <View style={styles.Container}>
          <View style={styles.LogInContainer}>
            <Text style={styles.TitleLogIn}>Create an account!</Text>
            <View style={styles.LogInInputContainer}>
                <CustomInput placeholder='Email' value={email} setValue={setEmail} />
                <CustomInput placeholder='Username' value={username} setValue={setUsername} />
                <CustomInput placeholder='Password' value={password} setValue={setPassword} secureTextEntry={true} />
                <CustomInput placeholder='Repeat Password' value={repeatPassword} setValue={setRepeatPassword} secureTextEntry={true}/>
                <View style={styles.LogInButton}>
                  <CustomButton textValue='Sign up' onPress={onPressSignUp}/>
                  <SignLine text='Log in' slogan="Already have an account?" onPress={onPressLogIn}/>
                </View>
              </View>
          </View>
        </View>
  )
}
