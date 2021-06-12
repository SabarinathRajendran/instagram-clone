import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Main from "./src/screens/Main";
import Authentication from "./src/screens/Authentication/index";

import store from "./src/Store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <Authentication />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
