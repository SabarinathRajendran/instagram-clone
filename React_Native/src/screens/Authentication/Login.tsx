import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Switch,
  TouchableOpacity,
} from "react-native";
import InstagramIcon from "../../../assets/logo_tsx/Instagram_logo";

import { useTheme } from "@react-navigation/native";

const Login = () => {
  const { colors } = useTheme();
  const [showPassword, setshowPassword] = useState(false);

  const styles = StyleSheet.create({
    Container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.background,
    },
  });

  const toggleSwitch = () => setshowPassword((previousState) => !previousState);

  return (
    <View style={styles.Container}>
      <InstagramIcon
        width={200}
        height={80}
        viewBox={[0, 0, 800, 300].join(" ")}
        fill={colors.text}
      />
      <View>
        <TextInput placeholder={"Username"} autoCompleteType={"username"} />
      </View>
      <View>
        <TextInput
          placeholder={"Password"}
          autoCompleteType={"password"}
          secureTextEntry={showPassword}
        />
        <Switch onValueChange={toggleSwitch} value={showPassword} />
        <TouchableOpacity></TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
