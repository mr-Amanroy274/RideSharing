import React, { useState, useContext } from "react";
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  Platform,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
  TouchableOpacity,
} from "react-native";

import Sms from "../config/Sms";
import { UserContext } from "../context/UserContext";

const Login = ({ navigation }) => {
  const [num, setNum] = useState(null);
  const context = useContext(UserContext);

  const formatNumber = (num) => {
    const first = num.slice(0, 3);
    const second = num.slice(3, 10);
    const number = `${first}-${second}`;
    return number;
  };

  const submit = () => {
    console.log("submitted");
    // console.log(num);
    // formatNumber(num)
    context.setData({ number: formatNumber(num) });
    navigation.navigate("Verification");
  };
  return (
    <View style={styles.container}>
      {/* <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      > */}
      <View style={styles.switch}>
        <Text style={styles.text}>Log in</Text>
        <Text style={styles.text}>Sign up</Text>
      </View>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.containerLogin}>
          <View style={styles.containerInput}>
            <View style={styles.openDialogView}>
              <Text style={{ fontSize: 20 }}>{"+977 |"}</Text>
            </View>
            <TextInput
              placeholder='phone number'
              keyboardType='numeric'
              maxLength={10}
              style={styles.input}
              value={num}
              onChangeText={(e) => setNum(e)}
            />
          </View>
          <Text style={{ opacity: 0.5, marginTop: 20 }}>
            Log in with your phone number
          </Text>
          <View style={styles.viewButton}>
            <TouchableOpacity onPress={submit} style={styles.loginButton}>
              <View style={styles.loginButton}>
                <Text style={{ fontSize: 20 }}>Log in</Text>
              </View>
              <Sms />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
      {/* </KeyboardAvoidingView> */}
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0FE3FF",
    paddingTop: 20,
  },
  switch: {
    flex: 0.15,
    flexDirection: "row",
    padding: 10,
  },
  text: {
    fontSize: 30,
    paddingRight: 20,
    opacity: 0.5,
    // fontWeight: "bold",
  },
  containerLogin: {
    backgroundColor: "white",
    flex: 0.8,
    borderTopLeftRadius: 60,
    alignItems: "center",
  },
  containerInput: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  openDialogView: {
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginRight: 20,
  },
  input: {
    borderColor: "grey",
    borderBottomWidth: 1,
    width: "50%",
  },
  viewButton: {
    height: 50,
    width: "70%",
    // flex: 1,
    backgroundColor: "#4DE593",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 60,
    marginTop: 100,
  },
  loginButton: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColorr: "red",
  },
});

// import React from "react";
// import { SafeAreaView, StyleSheet, View, Text } from "react-native";
// import { Button } from "react-native-paper";
// import LoginScreen, { SocialButton } from "react-native-login-screen";

// const Login = () => {
//   return (
//     <LoginScreen
//       logoImageSource={require("../../assets/favicon.png")}
//       onLoginPress={() => {}}
//       onSignupPress={() => {}}
//       onEmailChange={(email) => {}}
//       onPasswordChange={(password) => {}}
//     >
//       <SocialButton text='Continue with Google' onPress={() => {}} />
//       <SocialButton
//         text='Continue with Facebook'
//         imageSource={require("../../assets/splash.png")}
//         onPress={() => {}}
//       />
//       <SocialButton
//         text='Continue with Twitter'
//         imageSource={require("../../assets/splash.png")}
//         onPress={() => {}}
//       />
//     </LoginScreen>
//   );
// };

// export default Login;
