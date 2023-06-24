import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    cardStack: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
    },
    noCardsContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    bottomButtons: {
      flexDirection: 'row',
      width: '80%',
      height: '10%',
      alignItems: 'center',
      justifyContent: 'space-around',
      backgroundColor: 'yellow',
      borderRadius: 20,
      marginTop: 15,
    },
  });

export {styles}
  