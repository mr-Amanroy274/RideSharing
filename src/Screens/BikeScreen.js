import React, { useState } from "react";
import { StyleSheet } from "react-native";
import RideScreen from "../Components/RideScreen";

const BikeScreen = ({navigation}) => {
  return (
    <>
      <RideScreen navigation={navigation} incomingVehicleType="Bike" />
    </>
  );
};

const styles = StyleSheet.create({});

export default BikeScreen;
