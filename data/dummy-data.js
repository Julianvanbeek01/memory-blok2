import Tiles from "../models/Tiles";

let tiles = [
  { value: "Heart", image: require("../assets/images/heart.png") },
  { value: "Heart", image: require("../assets/images/heart.png") },
  { value: "Tree", image: require("../assets/images/tree.png") },
  { value: "Tree", image: require("../assets/images/tree.png") },
  { value: "Water", image: require("../assets/images/water.png") },
  { value: "Water", image: require("../assets/images/water.png") },
  { value: "Lightning", image: require("../assets/images/lightning.png") },
  { value: "Lightning", image: require("../assets/images/lightning.png") },
  { value: "Apple", image: require("../assets/images/apple.png") },
  { value: "Apple", image: require("../assets/images/apple.png") },
  { value: "Fire", image: require("../assets/images/fire.png") },
  { value: "Fire", image: require("../assets/images/fire.png") },
  { value: "Cloud", image: require("../assets/images/cloud.png") },
  { value: "Cloud", image: require("../assets/images/cloud.png") },
  { value: "Sun", image: require("../assets/images/sun.png") },
  { value: "Sun", image: require("../assets/images/sun.png") }
];

for (var i = tiles.length - 1; i > 0; i--) {
  var j = Math.floor(Math.random() * (i + 1));
  var temp = tiles[i];
  tiles[i] = tiles[j];
  tiles[j] = temp;
}

const tilesList = [];

for (let k = 0; k < tiles.length; k++) {
  tilesList.push(new Tiles(k, tiles[k].value, tiles[k].image));
}

export const TILES = tilesList;
