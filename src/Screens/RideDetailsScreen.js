import { Text } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  Alert,
  TouchableOpacity,
  View,
  Linking,
  Image,
  StyleSheet,
} from "react-native";
import DetailCard from "../Components/DetailCard";
import SettingCard from "../Components/SettingCard";
import Spacer from "../Components/Spacer";

const RideDetailsScreen = ({ navigation }) => {
  return (
    <>
      <SettingCard
        buttonTitle="Book Ride"
        color={"green"}
        type="entypo"
        logo="bookmark"
        padding={0}
        onPress={() =>
          Alert.alert("Ride Booked", "You will be notified shortly", [
            {
              text: "Ok",
              onPress: () =>
                navigation.navigate("Settings", { screen: "MyBookedRide" }),
            },
          ])
        }
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <LinearGradient
            // Background Linear Gradient
            colors={["rgba(0,0,0,0.8)", "transparent"]}
            style={styles.background}
          />
          <Image
            source={require("../../assets/CRF250.png")}
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              margin: 20,
              resizeMode: "contain",
              backgroundColor: "#000",
            }}
          />
          <View>
            <Text style={styles.userInfoText}>Anish Mahato</Text>
            <Text style={styles.userInfoText}>CRF RALLY 250</Text>
            <Text style={styles.userInfoText}>Ba 1 Pa 1234</Text>
          </View>
        </View>
        <Spacer />
        <Spacer />
        <Spacer>
          <DetailCard
            firstLabel="From"
            firstValue="Kathmandu"
            secondLabel="To:"
            secondValue="Pokhara"
            firstLabelColor="green"
            secondLabelColor="red"
          />
        </Spacer>
        <Spacer bottomBorderWidth={1} />
        <Spacer>
          <DetailCard firstLabel=" Date" firstValue="2021-05-05" />
        </Spacer>
        <Spacer bottomBorderWidth={1} />
        <Spacer>
          <DetailCard firstLabel=" Time" firstValue="10:00 AM" />
        </Spacer>
        <Spacer bottomBorderWidth={1} />
        <Spacer>
          <TouchableOpacity
            onPress={() => Linking.openURL(`tel:${9843123456}`)}
          >
            <DetailCard
              firstLabel=" Contact"
              firstValue="9843123456"
              firstLabelColor={"green"}
            />
          </TouchableOpacity>
        </Spacer>
      </SettingCard>
    </>
  );
};

const styles = StyleSheet.create({
  userInfoText: {
    fontWeight: "700",
    fontSize: 16,
    paddingVertical: 2,
    color: "#111",
    marginLeft: 15,
  },
});

export default RideDetailsScreen;
