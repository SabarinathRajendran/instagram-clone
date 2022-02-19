import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, useColorScheme } from "react-native";
import Main from "./src/screens/Main";
import Splashscreen from "./src/screens/SplashScreen/index";
import Initail from "./src/screens/Initial";
import store from "./src/Store";
import { Provider } from "react-redux";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";

export default function App() {
  const scheme = useColorScheme();
  return (
    //<Provider store={store}>
    <NavigationContainer theme={scheme === "dark" ? DefaultTheme : DarkTheme}>
      <StatusBar style={scheme === "dark" ? "dark" : "light"} />
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
