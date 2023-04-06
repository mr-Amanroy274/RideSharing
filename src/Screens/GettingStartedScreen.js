import { Button, Text } from "@rneui/themed";
import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import Spacer from "../Components/Spacer";

const GettingStartedScreen = ({ navigation }) => {
  return (
    <>
      <View style={{margin: 30, marginTop: 150}}>
        <Spacer>
          <Text h1>Welcome to Ride Sharing Platform</Text>
        </Spacer>
        <Spacer>
            <Text h5>Help someone getting to their destination</Text>
        </Spacer>
        <Spacer>
            <Text h6 style={{marginLeft: 100}}>or</Text>
        </Spacer>
        <Spacer>
            <Text h5>Get Help getting to your destination</Text>
        </Spacer>
      </View>
      <View style={styles.screen}>
        <Button onPress={() => navigation.navigate("AuthenticationTabs", {screen: 'Signup'})}>Get Started</Button>
        <Spacer>
          <TouchableOpacity onPress={() => navigation.navigate("AuthenticationTabs", {screen: 'Signin'})}>
            <Text>Already have an account? Sign in here</Text>
          </TouchableOpacity>
        </Spacer>
        <Spacer>
          <TouchableOpacity onPress={() => navigation.navigate("Authenticated")}>
            <Text>Authenticates</Text>
          </TouchableOpacity>
        </Spacer>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  screen: {
    position: "absolute",
    bottom: 50,
    width: "90%",
    left: 20,
  },
});

export default GettingStartedScreen;
