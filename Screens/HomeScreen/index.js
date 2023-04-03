import { React, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
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
        <TouchableOpacity style={styles.ButtonContainer}>
            <Text style={[{fontFamily: 'Roboto-Bold'}, styles.TitleButton]}>Let's get started!</Text>
        </TouchableOpacity>
    </View>
  )
}
