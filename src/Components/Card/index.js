import { Animated, View, Text, TouchableOpacity, Easing } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

const FlipCard = ({onFlip, englishVerb, iconVerb, englishVerbPastPerfect, englishVerbPreterit, translation}) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const rotationValue = useState(new Animated.Value(0))[0];
 
    const [fontsLoaded] = useFonts({
      'Roboto-Bold': require('../../../assets/fonts/Roboto-Bold.ttf'),
      'Milky-Coffee': require('../../../assets/fonts/Milky-Coffee.ttf'),
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

    const handleFlip = () => {
      const newValue = !isFlipped;
      setIsFlipped(newValue)
      Animated.timing(rotationValue, {
        toValue: newValue ? 180 : 0,
        duration: 400,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();
      onFlip(newValue)
      console.log('onflip: ', onFlip)
    };
    

    const frontInterpolate = rotationValue.interpolate({
        inputRange: [0, 180],
        outputRange: ['0deg', '180deg'],
    });
    const backInterpolate = rotationValue.interpolate({
        inputRange: [0, 180],
        outputRange: ['180deg', '360deg'],
    });

    const frontAnimatedStyle = { transform: [{ rotateY: frontInterpolate }] };
    const backAnimatedStyle = { transform: [{ rotateY: backInterpolate }] };
  
  return (
    <TouchableOpacity style={{width: '80%', height: '75%'}} onPress={handleFlip}>
      <Animated.View style={[styles.frontCard, frontAnimatedStyle]}>
        <Icon name="question" size={30} color="#fff" />
        <Text style={styles.textStyle}>{englishVerb}</Text>
        <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', rowGap: 2}}>
          <Icon name="hand-pointer" size={30} color="#fff" />
          <Text style={{color: '#fff', opacity: 0.3}}>Click to reveal</Text>
        </View>
      </Animated.View>
      <Animated.View style={[styles.backCard, backAnimatedStyle]}>
        <Icon name={iconVerb} size={30} color="#fff" />
        <View style={styles.verbBox}>
          <Text style={[{fontFamily: 'Roboto-Bold'}, styles.textList]}>Root:</Text>
          <Text style={styles.textStyle}>{englishVerb}</Text>
        </View>
        <View style={styles.verbBox}>
          <Text style={[{fontFamily: 'Roboto-Bold'}, styles.textList]}>Preterit:</Text>
          <Text style={styles.textStyle}>{englishVerbPreterit}</Text>
        </View>
        <View style={styles.verbBox}>
          <Text style={[{fontFamily: 'Roboto-Bold'}, styles.textList]}>Past Perfect:</Text>
          <Text style={styles.textStyle}>{englishVerbPastPerfect}</Text>
        </View>
        <View style={styles.verbBox}>
          <Text style={[{fontFamily: 'Roboto-Bold'}, styles.textList]}>Translation:</Text>
          <Text style={styles.textStyle}>{translation}</Text>
        </View>
      </Animated.View>
    </TouchableOpacity>
  )
};

export default FlipCard;