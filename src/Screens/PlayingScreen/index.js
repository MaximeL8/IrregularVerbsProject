import React, { useState } from 'react';
import { View, SafeAreaView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../../../assets/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import CardStack from '../../Components/CardStack';
import { styles } from './styles';
import verbsData from '../../../assets/IrregularVerbs.json';

const PlayingScreen = () => {
  const [cards, setCards] = useState(
    verbsData.verbs.map((verb, index) => ({
      id: index + 1,
      verb: verb.base,
      preterit: verb.pastSimple,
      pastPerfect: verb.pastParticiple,
      translation: verb.translation,
    }))
  );
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleCardSwipe = () => {
    setCurrentCardIndex(currentCardIndex + 1);
  };

  return (
    <LinearGradient
      colors={[Colors.gradient.bottomLeft, Colors.gradient.topRight]}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {currentCardIndex < cards.length ? (
          <CardStack cards={cards} currentCardIndex={currentCardIndex} onCardSwipe={handleCardSwipe} />
        ) : (
          <View style={styles.noCardsContainer}>
            <Icon name="window-close" size={70} color="red" />
          </View>
        )}
        
      </SafeAreaView>
    </LinearGradient>
  );
};

export default PlayingScreen;
