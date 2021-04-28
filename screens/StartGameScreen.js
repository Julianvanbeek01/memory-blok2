import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import MainButton from "../components/MainButton";

const StartGameScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Memory</Text>
      <MainButton onPress={() => props.onStartGame(true)}>START GAME</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center"
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 26,
    marginTop: 150
  },
  button: {
    width: 200
  }
});

export default StartGameScreen;
