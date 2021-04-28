import React from "react";
import { View, Text, StyleSheet } from "react-native";

import MemoryBoard from "../components/MemoryBoard";

const GameScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Memory</Text>
      <MemoryBoard />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    marginTop: 75
  },
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default GameScreen;
