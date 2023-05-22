import { React, useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { styles } from './styles';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import CustomInput from '../../Components/CustomInput';
import CustomButton from '../../Components/CustomButton';
import SignLine from '../../Components/SignLine';
import { useNavigation } from '@react-navigation/native';

export default function SignInScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
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

  const onPressChangePassword = () => {
    navigation.navigate('ForgotPassword')
  }

  const onPressSignUp = () => {
    navigation.navigate('SignUp')
  }

  const onPressLogIn = () => {
  }

  return (
        <View style={styles.Container}>
          <View style={styles.TitleContainer}>
              <Text style={[{fontFamily: 'Milky-Coffee'}, styles.TitleText]}>English Irregular Verbs</Text>
          </View>
          <View style={styles.LogInContainer}>
            <Text style={styles.TitleLogIn}>Welcome!</Text>
            <View style={styles.LogInInputContainer}>
                <CustomInput placeholder='Username' value={username} setValue={setUsername} />
                <CustomInput placeholder='Password' value={password} setValue={setPassword} secureTextEntry={true} />
                <View style={styles.LogInButton}>
                  <CustomButton textValue='Login' onPress={onPressLogIn}/>
                  <SignLine text='Change Password' slogan="Forgot the password ?" onPress={onPressChangePassword}/>
                  <SignLine text='Sign up' slogan="Don't have an account ?" onPress={onPressSignUp}/>
                </View>
              </View>
          </View>
        </View>
  )
}
