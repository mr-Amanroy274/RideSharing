import React, { useContext } from "react";
import { Image, Text } from "@rneui/themed";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ScrollView } from "react-native";

import ListCard from "../Components/ListCard";
import SettingCard from "../Components/SettingCard";
import Spacer from "../Components/Spacer";
import { Context as AuthContext } from "../Context/AuthContext";

const imageHeight = 100;

const SettingsScreen = ({ navigation }) => {
  const {
    state: { userInfo },
    signout,
  } = useContext(AuthContext);

  return (
    <ScrollView>
      <StatusBar style="light" backgroundColor="#0e1b31" />
      <View style={styles.topSetting}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: /* userInfo.user_profile */ "https://unsplash.it/600/600",
            }}
            style={styles.image}
          />
        </View>
        <View>
          <Text style={styles.userInfoText}>
            {/*userInfo.first_name*/ "Hari Dahal"}{" "}
          </Text>
          <Text style={styles.userInfoText}>
            {/*userInfo.current_address*/ "Kalimati, Kathmandu"}
          </Text>
          <Text style={styles.userInfoText}>
            {/*userInfo.phoneNumber*/ "+977 9843123456"}
          </Text>
        </View>
      </View>
      <SettingCard buttonTitle="Sign Out" onPress={signout}>
        <ListCard
          title={"My Ride History"}
          onPress={() => navigation.navigate("Ridehistory")}
        />
        <Spacer bottomBorderWidth={1} />
        <ListCard
          title={"My Booked Rides"}
          onPress={() => navigation.navigate("MyBookedRide")}
        />
        <Spacer bottomBorderWidth={1} />
        <ListCard
          title={"My Offered Rides"}
          onPress={() => navigation.navigate("MyOfferedRide")}
        />
      </SettingCard>
    </ScrollView>
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
  },
  userInfoText: {
    fontWeight: "700",
    fontSize: 16,
    paddingVertical: 2,
    color: "#fff",
    marginLeft: 15,
  },
  topSetting: {
    backgroundColor: "#0e1b31",
    height: 250,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default SettingsScreen;
