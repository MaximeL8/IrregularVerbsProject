import { React, useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { styles } from './styles';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useNavigation } from '@react-navigation/native';
import PlayingScreen from '../PlayingScreen';
import CustomInput from '../../Components/CustomInput';
import CustomButton from '../../Components/CustomButton';
import SignUpLine from '../../Components/SignUpLine';

export default function HomeScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [fontsLoaded] = useFonts({
    'Milky-Coffee': require('../../assets/fonts/Milky-Coffee.ttf'),
    'Roboto-Bold': require('../../assets/fonts/Roboto-Bold.ttf'),
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
    console.warn('Signing up!');
  }

  const onPressLogIn = () => {
    console.warn('Loging in!');
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
                  <SignUpLine onPress={onPressSignUp}/>
                </View>
              </View>
          </View>
        </View>
  )
}
