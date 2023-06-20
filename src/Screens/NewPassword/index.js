import { React, useEffect, useState } from 'react';
import { View, Text, Alert, ToastAndroid } from 'react-native';
import { styles } from './styles';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useNavigation } from '@react-navigation/native';
import PlayingScreen from '../PlayingScreen';
import CustomInput from '../../Components/CustomInput';
import CustomButton from '../../Components/CustomButton';
import SignLine from '../../Components/SignLine';
import { useRoute } from '@react-navigation/native';
import { Auth } from 'aws-amplify';

export default function NewPassword() {
  const route = useRoute();
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [username, setUsername] = useState(route?.params?.username);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

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

  const confirmNewPassword = async () => {
    if(loading){
      return;
    }
    setLoading(true);
    try {
      await Auth.forgotPasswordSubmit(username, code, newPassword);
      ToastAndroid.show('Your password has been updated, you can now log in.', 2000);
      navigation.navigate('SignIn');
    } catch (e) {
      Alert.alert('Cannot confirm : ', e.message);
      setCode('');
      setNewPassword('');
    }
    setLoading(false);
  }

  const signIn = () => {
    navigation.navigate('SignIn');
  }

  return (
        <View style={styles.Container}>
          <View style={styles.LogInContainer}>
            <Text style={styles.TitleLogIn}>Reset your password</Text>
            <View style={styles.LogInInputContainer}>
              <CustomInput placeholder='Username' value={username} setValue={setUsername} />
              <CustomInput placeholder='Code' value={code} setValue={setCode} />
              <CustomInput placeholder='New Password' value={newPassword} setValue={setNewPassword} />
              <View style={styles.LogInButton}>
                <CustomButton textValue={loading ? 'Loading ...' : 'Submit'} onPress={confirmNewPassword}/>
                <SignLine text='Log in' slogan="Already have an account?" onPress={signIn}/>
              </View>
            </View>
          </View>
        </View>
  )
}
