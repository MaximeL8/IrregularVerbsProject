import { React, useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { styles } from './styles';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useNavigation } from '@react-navigation/native';
import PlayingScreen from '../PlayingScreen';
import CustomInput from '../../Components/CustomInput';
import CustomButton from '../../Components/CustomButton';
import SignLine from '../../Components/SignLine';

export default function ConfirmSignUp() {
  const [code, setCode] = useState('');
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

  const confirmSignUp = () => {
    navigation.navigate('Home')
  }

  const login = () => {
    navigation.navigate('SignIn')
  }

  return (
        <View style={styles.Container}>
          <View style={styles.LogInContainer}>
            <Text style={styles.TitleLogIn}>Confirm Sign Up</Text>
            <View style={styles.LogInInputContainer}>
                <CustomInput placeholder='Code' value={code} setValue={setCode} />
                
                <View style={styles.LogInButton}>
                  <CustomButton textValue='Confirm' onPress={confirmSignUp}/>
                  <SignLine text='Resend code' slogan="Haven't received the code yet ?" />
                  <SignLine text='Log in' slogan="Already have an account?" onPress={login}/>
                </View>
              </View>
          </View>
        </View>
  )
}
