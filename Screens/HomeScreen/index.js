import { React, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { styles } from './styles';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

export default function HomeScreen() {
  
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

  return (
      <View style={styles.Container}>
        <View style={styles.TitleContainer}>
            <Text style={[{fontFamily: 'Milky-Coffee'}, styles.TitleText]}>English Irregular Verbs</Text>
        </View>
        <View style={styles.LogInContainer}>
          <Text style={styles.TitleLogIn}>Welcome!</Text>
          <View style={styles.LogInInputContainer}>
              <TextInput
                style={styles.LogInInput}
                placeholder='Username'
              />
              <TextInput
                style={styles.LogInInput}
                placeholder='Password'
              />
              <View style={styles.LogInButton}>
                <TouchableOpacity style={styles.ButtonLogIn}>
                  <Text style={{color: 'white', fontWeight: 'bold'}}>Login</Text>
                </TouchableOpacity>
                <View style={styles.SignUpView}>
                  <Text style={{color: '#D5D4D5'}}>Don't have an account?</Text>
                  <TouchableOpacity>
                    <Text style={{color: '#FF5C2C', fontWeight: 'bold'}}> Sign Up</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
        </View>
      </View>
  )
}
