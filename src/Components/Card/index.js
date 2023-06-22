import { View, SafeAreaView, Text, TouchableOpacity, Animated, Easing, StyleSheet } from 'react-native';
import React, { useState} from 'react';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const Card = ({englishVerb, iconVerb}) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const rotationValue = useState(new Animated.Value(0))[0];

    const handleFlip = () => {
        Animated.timing(rotationValue, {
        toValue: isFlipped ? 0 : 180,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: true,
        }).start();
        setIsFlipped(!isFlipped);
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
    <View style={styles.cardContainer}>
      <Icon name={iconVerb} size={40} color="#fff" />
      <Text style={styles.textStyle}>{englishVerb}</Text>
    </View>
  )
};

export default Card;