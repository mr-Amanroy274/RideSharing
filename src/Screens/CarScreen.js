import React from "react";
import RideScreen from "../Components/RideScreen";
import { useContext } from "react";
import { Context as LocationContext } from "../Context/LocationContext";

const CarScreen = ({navigation}) => {
  const {state, searchRides, addRides} = useContext(LocationContext);
  return (
    <>
      <RideScreen navigation={navigation} incomingVehicleType="Car" />
    </>
  );
};

export default CarScreen;
