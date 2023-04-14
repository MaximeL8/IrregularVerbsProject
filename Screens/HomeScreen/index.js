import { React, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { styles } from './styles';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import MaterialIcon, {colorPalette} from 'material-icons-react';

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
        <View>
          <View
            style={{
              flexDirection: 'row',
              borderBottomColor: '#ccc',
              borderBottomWidth: 1,
              paddingBottom: 8,
              marginBottom: 25,
          }}>
          <MaterialIcon
            name = "alternate-email"
            size = {28}
            color = "#666"
            style = {{marginRight: 5}}
          />
          <TextInput
            placeholder='Email ID'
            style = {{flex: 1, paddingVertical: 0}}
          />
          </View>
        </View>
    </View>
  )
}
