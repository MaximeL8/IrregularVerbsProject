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

export default function NewPassword() {
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
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

  const confirmNewPassword = () => {
    navigation.navigate('Home');
  }

  const signIn = () => {
    navigation.navigate('SignIn');
  }

  return (
        <View style={styles.Container}>
          <View style={styles.LogInContainer}>
            <Text style={styles.TitleLogIn}>Reset your password</Text>
            <View style={styles.LogInInputContainer}>
                <CustomInput placeholder='Code' value={code} setValue={setCode} />
                <CustomInput placeholder='New Password' value={newPassword} setValue={setNewPassword} />
                <View style={styles.LogInButton}>
                  <CustomButton textValue='Submit' onPress={confirmNewPassword}/>
                  <SignLine text='Log in' slogan="Already have an account?" onPress={signIn}/>
                </View>
              </View>
          </View>
        </View>
  )
}
