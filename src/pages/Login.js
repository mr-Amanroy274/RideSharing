import React from "react";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-paper";
import LoginScreen, { SocialButton } from "react-native-login-screen";

const Login = () => {
  return (
    <LoginScreen
      logoImageSource={require("../../assets/favicon.png")}
      onLoginPress={() => {}}
      onSignupPress={() => {}}
      onEmailChange={(email) => {}}
      onPasswordChange={(password) => {}}
    >
      <SocialButton text='Continue with Google' onPress={() => {}} />
      <SocialButton
        text='Continue with Facebook'
        imageSource={require("../../assets/splash.png")}
        onPress={() => {}}
      />
      <SocialButton
        text='Continue with Twitter'
        imageSource={require("../../assets/splash.png")}
        onPress={() => {}}
      />
    </LoginScreen>
  );
};

export default Login;
