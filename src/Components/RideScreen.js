import React, { useState } from "react";
import { ToastAndroid } from "react-native";
import { Alert } from "react-native";
import { StyleSheet } from "react-native";
import Map from "./Map";
import SearchButton from "./SearchButton";
import SearchContainer from "./SearchContainer";
import { Context as LocationContext } from "../Context/LocationContext";

const BikeScreen = ({ navigation, incomingVehicleType }) => {
  const [destination, setDestination] = useState(null);
  const [origin, setOrigin] = useState(null);
  const [destinationPlaceId, setDestinationPlaceId] = useState(null);
  const [originPlaceId, setOriginPlaceId] = useState(null);
  const [destinationName, setDestinationName] = useState(null);
  const [originName, setOriginName] = useState(null);
  const [vehicleType, setVehicleType] = useState(incomingVehicleType || null);
  const [searchContainerState, setSearchContainerState] = useState(false);
  const originRef = React.useRef();
  const { saveRide } = React.useContext(LocationContext);

  const handleSearch = () => {
    if (destination && origin) {
      navigation.navigate("CarRides");
    }
  };

  const handleOfferRide = () => {
    console.log(destination);
    if (destination && origin)
      Alert.alert(
        "Are you sure?",
        `Destination:${destinationName} \n Origin:${originName}`,
        [
          ,
          {
            text: "Edit",
            onPress: () => originRef.current.focus(),
            style: "cancel",
          },
          {
            text: "OK",
            onPress: () => {
              ToastAndroid.show(
                "Ride Uploaded Successfully",
                ToastAndroid.TOP,
                ToastAndroid.LONG
              );
              saveRide({
                destination,
                origin,
                destinationPlaceId,
                originPlaceId,
                vehicleType,
                destinationName,
                originName,
              });
              navigation.navigate("CarRides");
            },
          },
        ]
      );
    else {
      Alert.alert("Please enter origin and destination");
    }
  };

  return (
    <>
      <Map destination={destination} origin={origin} />
      <SearchButton
        vehicleType="Bike"
        displaySearchContainer={setSearchContainerState}
        searchContainerState={searchContainerState}
      />
      {searchContainerState && (
        <SearchContainer
          setDestination={setDestination}
          setOrigin={setOrigin}
          setDestinationPlaceId={setDestinationPlaceId}
          setOriginPlaceId={setOriginPlaceId}
          handleSearch={handleSearch}
          handleOfferRide={handleOfferRide}
          setDestinationName={setDestinationName}
          setOriginName={setOriginName}
          navigation={navigation}
          originRef={originRef}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({});

export default BikeScreen;
