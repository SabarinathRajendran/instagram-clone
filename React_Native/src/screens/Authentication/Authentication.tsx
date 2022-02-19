import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import SignInAcrue from "./SignInAcrue";
import InstagramIcon from "../../../assets/logo_tsx/Instagram_logo";
import { useTheme } from "@react-navigation/native";

const Authentication = () => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <InstagramIcon
        width={200}
        height={80}
        viewBox={[0, 0, 800, 300].join(" ")}
        fill={colors.text}
      />
      <Text style={{ fontSize: 30, fontWeight: "bold", marginBottom: 15 }}>
        Clone
      </Text>
      <TouchableOpacity style={styles.createActBtn}>
        <Text
          style={{
            color: "#fff",
          }}
        >
          Create New Account
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Login</Text>
      </TouchableOpacity>
      <SignInAcrue />
    </View>
  );
};

export default Authentication;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  createActBtn: {
    justifyContent: "center",
    alignItems: "center",
    width: 340,
    height: 50,
    borderRadius: 5,
    backgroundColor: "#0095ff",
    marginBottom: 15,
  },
});
