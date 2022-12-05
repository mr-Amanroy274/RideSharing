import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { Button } from "react-native-paper";

const GetStarted = ({ navigation }) => {
  return (
    //
    <View style={styles.container}>
      <View style={styles.logo}></View>
      <View>
        <Button
          mode='contained'
          buttonColor='white'
          textColor='black'
          color='white'
          onPress={() => navigation.navigate("Signup")}
          style={styles.button}
        >
          Get Started
        </Button>
      </View>
      <View style={{ marginTop: 10 }}>
        <Text>
          Already have an account?{" "}
          <Text
            style={{ fontWeight: "bold" }}
            onPress={() => navigation.navigate("Login")}
          >
            Log in
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0EFF79",
    alignItems: "center",
  },
  logo: {
    flex: 0.8,
  },
  button: {
    // width: '100%'
    paddingLeft: 80,
    paddingRight: 80,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 20,
  },
});

export default GetStarted;
