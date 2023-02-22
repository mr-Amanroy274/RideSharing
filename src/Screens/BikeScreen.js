import React, { useState } from "react";
import { StyleSheet } from "react-native";
import Map from "../Components/Map";
import SearchButton from "../Components/SearchButton";
import SearchContainer from "../Components/SearchContainer";

const BikeScreen = () => {
  const [destination, setDestination] = useState(null);
  const [origin, setOrigin] = useState(null);
  const [searchContainerState, setSearchContainerState] = useState(false);
  return (
    <>
      <Map destination={destination} origin={origin} /> 
      <SearchButton vehicleType='Bike' displaySearchContainer={setSearchContainerState} searchContainerState={searchContainerState}/>
      {searchContainerState && <SearchContainer setDestination={setDestination} setOrigin={setOrigin} />}
    </>
  );
};

const styles = StyleSheet.create({});

export default BikeScreen;
