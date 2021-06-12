import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import LoginField from "./LoginField";
import Line from "../Components/Line";
import SignInAcrue from "./SignInAcrue";

import * as svg from "react-native-svg";
import InstagramIcon from "../../../assets/logo_tsx/Instagram_logo";

const { width, height } = Dimensions.get("window");
const vwidth = 800;
const vHeight = 300;

const Authentication = () => {
  return (
    <View style={styles.container}>
      <InstagramIcon
        width={200}
        height={80}
        viewBox={[0, 0, vwidth, vHeight].join(" ")}
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
