import React from "react";
import { useState } from "react";
import Map from "../Components/Map";
import SearchButton from "../Components/SearchButton";
import SearchContainer from "../Components/SearchContainer";

const CarScreen = ({navigation}) => {
  const [destination, setDestination] = useState(null);
  const [origin, setOrigin] = useState(null);
  const [searchContainerState, setSearchContainerState] = useState(false);

  return (
    <>
      <Map destination={destination} origin={origin} />
      <SearchButton
        vehicleType="Car"
        displaySearchContainer={setSearchContainerState}
        searchContainerState={searchContainerState}
      />
      {searchContainerState && (
        <SearchContainer
          setDestination={setDestination}
          setOrigin={setOrigin}
          navigation={navigation}
        />
      )}
    </>
  );
};

export default CarScreen;
