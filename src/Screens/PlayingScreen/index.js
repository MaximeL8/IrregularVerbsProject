import React, { useState } from 'react';
import { View, SafeAreaView, TouchableOpacity, Modal, FlatList, Text, Alert, ToastAndroid } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../../../assets/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import CardStack from '../../Components/CardStack';
import { styles } from './styles';
import verbsData from '../../../assets/IrregularVerbs.json';
import CustomButton from '../../Components/CustomButton';
import { Auth } from 'aws-amplify';
import CustomModal from '../../Components/CustomModal';

const PlayingScreen = () => {
  const [cards, setCards] = useState(
    verbsData.verbs.map((verb, index) => ({
      id: index + 1,
      verb: verb.base,
      preterit: verb.pastSimple,
      pastPerfect: verb.pastParticiple,
      translation: verb.translation,
      isKnown: false, 
    }))
  );
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showListModal, setShowListModal] = useState(false); 

  const handleCardSwipe = (isKnown) => {
    if (isKnown) {
      setCards((prevCards) =>
        prevCards.map((card, index) => ({
          ...card,
          isKnown: index === currentCardIndex ? true : card.isKnown, 
        }))
      );
    }

    setCurrentCardIndex(currentCardIndex + 1);
  };

  const signOut = async () => {
    try {
      await Auth.signOut();
      ToastAndroid.show('Sign out successfully', 2000);
    } catch (e) {
      Alert.alert('Cannot sign out: ', e.message);
    }
  };

  const handleListButtonPress = () => {
    setShowListModal(true); 
  };

  const closeModal = () => {
    setShowListModal(false); 
  };

  const knownVerbs = cards.slice(0, currentCardIndex).filter((card) => card.isKnown); 
  const unknownVerbs = cards.slice(0, currentCardIndex).filter((card) => !card.isKnown); 


  const renderListItem = ({ item }) => {
    return (
      <View style={styles.listItem}>
        <Text style={styles.textStyle}>{item.verb} |</Text>
        <Text style={styles.textStyle}> {item.preterit} |</Text>
        <Text style={styles.textStyle}> {item.pastPerfect} |</Text>
        <Text style={styles.textStyle}> {item.translation}</Text>
      </View>
    );
  };

  return (
    <LinearGradient
      colors={[Colors.gradient.bottomLeft, Colors.gradient.topRight]}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={styles.safeViewContainer}>
        <View style={styles.topButtons}>
          <CustomButton textValue="Sign out" onPress={signOut} />
          <CustomModal/>
          <CustomButton textValue="Your list" onPress={handleListButtonPress} />
        </View>
        {currentCardIndex < cards.length ? (
          <CardStack cards={cards} currentCardIndex={currentCardIndex} onCardSwipe={handleCardSwipe} />
        ) : (
          <View style={styles.noCardsContainer}>
            <Icon name="window-close" size={70} color="red" />
          </View>
        )}

        <Modal visible={showListModal} animationType="slide" onRequestClose={closeModal}>
          <LinearGradient
            colors={[Colors.gradient.bottomLeft, Colors.gradient.topRight]}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
            style={{ flex: 1 }}
          >
          <View style={styles.modalContainer}>
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Icon name="times" size={40} color="black" />
            </TouchableOpacity>
            <Text style={styles.listTitle}>Verbs I Know:</Text>
            <FlatList
              data={knownVerbs}
              renderItem={renderListItem}
              keyExtractor={(item) => item.id.toString()}
              style={styles.listContainer}
            />
            <Text style={styles.listTitle}>Verbs I Don't Know:</Text>
            <FlatList
              data={unknownVerbs}
              renderItem={renderListItem}
              keyExtractor={(item) => item.id.toString()}
              style={styles.listContainer}
            />
          </View>
          </LinearGradient>
        </Modal>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default PlayingScreen;
