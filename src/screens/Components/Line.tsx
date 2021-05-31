import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

const { width } = Dimensions.get("window");

const Line = () => {
  return <View style={styles.line}></View>;
};

export default Line;

const styles = StyleSheet.create({
  line: {
    width: 280,
    height: 1.5,
    backgroundColor: "#000",
  },
});
