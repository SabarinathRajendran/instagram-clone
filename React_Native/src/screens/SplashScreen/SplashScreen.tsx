import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Logo_svg from "../../../assets/logo_tsx/Logo_svg";
import { useTheme } from "@react-navigation/native";

const SplashScreen = () => {
  const vwidth = 512;
  const vHeight = 512;

  const { colors } = useTheme();

  return (
    <View style={[{ ...styles.container, backgroundColor: colors.background }]}>
      <View style={styles.Logocontainer}>
        <Logo_svg
          style={{ alignSelf: "center" }}
          width={60}
          height={60}
          viewBox={[0, 0, vwidth, vHeight].join(" ")}
        />
      </View>
      <View style={styles.TextContainer}>
        <Text style={[{ ...styles.Text, color: colors.text }]}>Clone By</Text>
        <Text
          style={[
            { ...styles.Text },
            { fontWeight: "bold", color: colors.text },
          ]}
        >
          SABARINATH
        </Text>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  Logocontainer: {
    flex: 9,
    justifyContent: "center",
  },
  TextContainer: {
    flex: 1,
  },
  Text: {
    margin: 5,
    alignSelf: "center",
    fontSize: 16,
  },
});
