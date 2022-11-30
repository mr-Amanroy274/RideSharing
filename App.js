import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { LinearGradient } from "expo-linear-gradient";

//import files
import GetStarted from "./src/pages/GetStarted";
import Mode from "./src/pages/Mode";
import Signup from "./src/pages/Signup";
import Login from "./src/pages/Login";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='GetStarted'>
        <Stack.Screen
          name='GetStarted'
          component={GetStarted}
          options={{ title: "get started" }}
        />
        <Stack.Screen
          name='Mode'
          component={Mode}
          options={{ title: "mode" }}
        />
        <Stack.Screen
          name='Signup'
          component={Signup}
          options={{ title: "sign up" }}
        />
        <Stack.Screen
          name='Login'
          component={Login}
          options={{ title: "Log in" }}
        />
      </Stack.Navigator>
      {/* <GetStarted /> */}
      <StatusBar style='auto' />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0EFF79",
    // alignItems: "center",
    // justifyContent: "flex-end",
    // paddingBottom: 50
    // backgroundColor: 'linear-gradient(326.68deg, #00F5FF 0%, #0EFF79 70.34%)'
  },
});
