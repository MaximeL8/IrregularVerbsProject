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
import { Colors } from '../../../assets/colors';
import { LinearGradient } from 'expo-linear-gradient';

export default function ConfirmSignUp() {
  const navigation = useNavigation();
  const route = useRoute();
  const [username, setUsername] = useState(route?.params?.username);
  const [code, setCode] = useState('');
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

  const confirmSignUp = async () => {
    if(loading){
      return;
    }
    setLoading(true);
    try {
      await Auth.confirmSignUp(username, code);
      ToastAndroid.show('Registered successfully!', 2000);
      navigation.navigate('SignIn');
    } catch (e) {
      Alert.alert('Cannot confirm : ', e.message);
      setCode('');
    }
    setLoading(false);
  }

  const resendCode = async () => {
    try {
      await Auth.resendSignUp(username);
      ToastAndroid.show('Resent successfully!', 2000);
    } catch (e) {
      Alert.alert('Cannot resend : ', e.message);
    }
  }

  const login = () => {
    navigation.navigate('SignIn')
  }

  return (
    <LinearGradient
        colors={[Colors.gradient.bottomLeft, Colors.gradient.topRight]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        style={{ flex: 1 }}
      >
      <View style={styles.Container}>
        <View style={styles.LogInContainer}>
          <Text style={styles.TitleLogIn}>Confirm Sign Up</Text>
          <View style={styles.LogInInputContainer}>
            <CustomInput placeholder='Username' value={username} setValue={setUsername} />
            <CustomInput placeholder='Code' value={code} setValue={setCode} />
            <View style={styles.LogInButton}>
              <CustomButton textValue={loading ? 'Loading ...' : 'Confirm'} onPress={confirmSignUp}/>
              <SignLine text='Resend code' slogan="Haven't received the code yet ?" onPress={resendCode}/>
              <SignLine text='Log in' slogan="Already have an account?" onPress={login}/>
            </View>
          </View>
        </View>
      </View>
    </LinearGradient>
  )
}
