import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf")
  });
};

export default function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [guesses, setGuesses] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return <AppLoading startAsync={fetchFonts} onFinish={() => setDataLoaded(true)} onError={(err) => console.log(err)} />;
  }

  const configureNewGameHandler = () => {
    setGuesses(0);
  };

  const startGameHandler = (gameStarted) => {
    setGameStarted(true);
  };

  const gameOverHandler = (numOfGuesses) => {
    setGuesses(numOfGuesses);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (gameStarted) {
    content = <GameScreen onGameOver={gameOverHandler} />;
  }

  return <View style={styles.screen}>{content}</View>;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
