import React from "react";
import RideScreen from "../Components/RideScreen";

const CarScreen = ({navigation}) => {
  return (
    <>
      <RideScreen navigation={navigation} incomingVehicleType="Car" />
    </>
  );
};

export default CarScreen;
