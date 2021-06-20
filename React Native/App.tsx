import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Main from "./src/screens/Main";
import Splashscreen from "./src/screens/SplashScreen/index";
import Initail from "./src/screens/Initial";
import store from "./src/Store";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    //<Provider store={store}>
    <NavigationContainer>
      <Initail />
    </NavigationContainer>
    //</Provider>
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
