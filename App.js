import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [color, setColor] = useState("red");
  const [isClicked, setIsClicked] = useState(false);

  const changeColor = () => {
    color == "red" ? setColor("blue") : setColor("red")
  };

  const changeSize = () => {
    isClicked == false ? setIsClicked(true) : setIsClicked(false)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {
        changeColor()
        changeSize()
        }}>
        <Text style={{
          color: color,
          fontSize: 15,
          textTransform: isClicked ? "uppercase" : "none",
        }}>Open up App.js to start working on your app!</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
