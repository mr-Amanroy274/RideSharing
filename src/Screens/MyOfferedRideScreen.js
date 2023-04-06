import React from "react";
import { Alert } from "react-native";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import { Image } from "react-native";
import { Linking } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import DetailCard from "../Components/DetailCard";
import SettingCard from "../Components/SettingCard";
import Spacer from "../Components/Spacer";
import UserRideScreen from "../Components/UserRideScreen";
import { Context as AuthContext } from "../Context/AuthContext";
import Data from "../Data";

const MyOfferedRideScreen = () => {
  const { state } = React.useContext(AuthContext);
  const item = Data[0];

  return (
    <UserRideScreen
      status="Offered"
      nameLabel="Name"
      phoneNumber={"+977 9871234560"}
      phoneLabel={"Phone Number"}
      date={"12/12/2020"}
      time={"12:00 PM"}
      origin={"Bhaktapur, Nepal"}
      destination={"Kathmandu, Nepal"}
      showUserInfo={true}
      name={"Abishek Poudel"}
      handleNo={() => console.log("no")}
      handleYes={() => console.log("yes")}
    />
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MyOfferedRideScreen;
