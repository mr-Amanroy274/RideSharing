import React from "react";
import { View, Text, StyleSheet } from "react-native";
import UserRideScreen from "../Components/UserRideScreen";
import { Context as AuthContext } from "../Context/AuthContext";

const MyRideBookedScreen = () => {
  const { state } = React.useContext(AuthContext);

  return (
    <UserRideScreen
      title="My Booked Rides"
      origin={"Bhaktapur, Nepal"}
      destination={"Kathmandu, Nepal"}
      date={"12/12/2020"}
      time={"12:00 PM"}
      name={"Hari Dahal"}
      nameLabel={"Rider Name"}
      phoneNumber={"+977 9871234560"}
      phoneLabel={ "Phone Number" }
      showUserInfo={true}
      vehicleModel="CRF Rally 250"
      vehicleModelName="Vehicle Model"
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

export default MyRideBookedScreen;
