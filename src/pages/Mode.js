import React from "react";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-paper";

const Mode = () => {
  return (
    <View style={styles.container}>
      <Button
        mode='contained'
        buttonColor='white'
        textColor='black'
        color='white'
        onPress={() => console.log('rider')}
        style={styles.button}
      >
        Rider
      </Button>
      <Button
        mode='contained'
        buttonColor='white'
        textColor='black'
        color='white'
        onPress={() => console.log('driver')}
        style={styles.button}
      >
        Driver
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    // width: '100%'
    paddingLeft: 80,
    paddingRight: 80,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 20,
    marginBottom:20
  },
});

export default Mode;
