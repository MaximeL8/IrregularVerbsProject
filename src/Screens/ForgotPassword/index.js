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
import { useRoute } from '@react-navigation/native';
import { Alert } from 'react-native';
import { Auth } from 'aws-amplify';

export default function ForgotPassword() {
  const route = useRoute();
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

  const confirmUsername = async () => {
    if(loading){
      return;
    }
    setLoading(true);
    try {
      await Auth.forgotPassword(username);
      navigation.navigate('NewPassword', {username: username});
    } catch (e) {
      Alert.alert('Cannot send : ', e.message);
    }
    setLoading(false);
  }

  const logIn = () => {
    navigation.navigate('SignIn');
  }

  return (
        <View style={styles.Container}>
          <View style={styles.LogInContainer}>
            <Text style={styles.TitleLogIn}>Reset your password</Text>
            <View style={styles.LogInInputContainer}>
                <CustomInput placeholder='Username' value={username} setValue={setUsername} />
                <View style={styles.LogInButton}>
                  <CustomButton textValue={loading ? 'Loading ...' : 'Send'} onPress={confirmUsername}/>
                  <SignLine text='Log in' slogan="Already have an account?" onPress={logIn} />
                </View>
              </View>
          </View>
        </View>
  )
}
