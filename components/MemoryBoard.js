import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from "react-native";

import { TILES } from "../data/dummy-data";

const MemoryBoard = (props) => {
  const [tileValue, setTileValue] = useState("");

  const renderGridItem = (itemData) => {
    let value = itemData.item.value;

    const onPress = () => {
      console.log(value);
    };

    return (
      <TouchableOpacity style={styles.gridItem} onPress={onPress}>
        <View>
          <Image source={itemData.item.image} style={styles.image} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.grid}>
      <FlatList data={TILES} renderItem={renderGridItem} numColumns={4} />
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    margin: 15,
    height: 60,
    width: 60,
    backgroundColor: "#eeeeee",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4
  },
  gridText: {
    fontFamily: "open-sans",
    fontSize: 12
  },
  grid: {
    flex: 1,
    alignItems: "center",
    paddingTop: 10
  },
  image: {
    width: 32,
    height: 32
  }
});

export default MemoryBoard;
