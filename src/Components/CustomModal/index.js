import React, { useState } from 'react';
import { View, Modal, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';

const CustomModal = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openModal}>
        <Icon name="scroll" size={25} color='yellow'/>
      </TouchableOpacity>

      <Modal visible={modalVisible} transparent={true} animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>App Explanation</Text>
            <Text style={styles.modalText}>
            Welcome to the Irregular Verbs app!
            {"\n\n"}
            Test your knowledge of irregular verbs in English with this interactive app. Here's how it works:
            {"\n\n"}
            <Text style={{ fontWeight: 'bold' }}>1. Swipe through the verb cards</Text> and think if you know the verb or not.
            {"\n\n"}
            <Text style={{ fontWeight: 'bold' }}>2. Flip the card</Text> to reveal the verb's details: past forms and translation.
            {"\n\n"}
            <Text style={{ fontWeight: 'bold' }}>3. Choose whether you know the verb or not</Text> by tapping the checkmark or close button.
            {"\n\n"}
            Your known verbs will be listed under <Text style={{ fontWeight: 'bold' }}>'Verbs I Know'</Text>.
            {"\n\n"}
            Your unknown verbs will be listed under <Text style={{ fontWeight: 'bold' }}>'Verbs I Don't Know'</Text>.
            {"\n\n"}
            Keep practicing and expanding your vocabulary!
            {"\n\n"}
            Enjoy the Irregular Verbs app!
            </Text>
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CustomModal;
