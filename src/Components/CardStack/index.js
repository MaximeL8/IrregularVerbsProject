import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import FlipCard from '../../Components/Card';
import { Colors } from '../../../assets/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './styles';

const CardStack = ({ cards, currentCardIndex, onCardSwipe }) => {
  const [isCardFlipped, setIsCardFlipped] = useState(false);
  const [isColored, setIsColored] = useState(false);

  const handleCardSwipe = (isKnown) => {
    onCardSwipe(isKnown);
    setIsCardFlipped(false);
    setIsColored(false);
  };

  const handleCardFlip = () => {
    const newValue = !isCardFlipped;
    setIsCardFlipped(newValue);
    if (newValue) {
      setIsColored(true);
    }
  };

  return (
    <View style={styles.cardStack}>
      {currentCardIndex < cards.length ? (
        <FlipCard
          key={cards[currentCardIndex].id}
          englishVerb={cards[currentCardIndex].verb}
          englishVerbPreterit={cards[currentCardIndex].preterit}
          englishVerbPastPerfect={cards[currentCardIndex].pastPerfect}
          translation={cards[currentCardIndex].translation}
          iconVerb="info-circle"
          onFlip={handleCardFlip}
        />
      ) : (
        <View style={styles.noCardsContainer}>
          <Icon name="window-close" size={70} color="red" />
        </View>
      )}
      {currentCardIndex < cards.length && (
        <View style={[{ opacity: isColored ? 1 : 0.3 }, styles.bottomButtons]}>
          <TouchableOpacity onPress={() => handleCardSwipe(false)} disabled={!isColored}>
            <Icon name="window-close" size={70} color="red" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleCardSwipe(true)} disabled={!isColored}>
            <Icon name="check-square" size={70} color="green" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default CardStack;
