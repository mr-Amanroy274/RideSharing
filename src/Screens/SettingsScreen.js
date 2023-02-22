import { Button, Image, Text } from "@rneui/themed";
import React from "react";
import { StyleSheet, View } from "react-native";
import Rides from "../Components/Rides";
import Spacer from "../Components/Spacer";

const imageHeight = 100;

const SettingsScreen = () => {
  return (
    <>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: "https://unsplash.it/600/600" }}
          style={styles.image}
        />
      </View>
      <View style={styles.userInfo}>
        <Text style={styles.userInfoText}>Name: Nabin Thapa</Text>
        <Text style={styles.userInfoText}>Location: Kalimati, Kalanki</Text>
        <Spacer>
          <Button style={styles.button}>Change Password</Button>
        </Spacer>
        <Spacer>
          <Button title="My Booked Rides" />
        </Spacer>
        <Spacer>
          <Button title="Offered Rides" />
        </Spacer>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    height: imageHeight,
    width: imageHeight,
    borderRadius: imageHeight / 2,
    alignSelf: "center",
  },
  imageContainer: {
    padding: 10,
    alignItems: "center",
    paddingTop: 50,
  },
  userInfo: {
    alignItems: "center",
  },
  userInfoText: {
    fontWeight: "800",
    fontSize: 20,
    padding: 10,
  },
  button: {
    marginTop: 10,
  },
});

export default SettingsScreen;
