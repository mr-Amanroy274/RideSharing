import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import tw from "twrnc";
import Map from "../components/Map";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
// navigator.geolocation = require('react-native-geolocation-service');

//import files
import { UserContext } from "../context/UserContext";

const GooglePlaces = ({placeholder,path}) => {
  
  const {state,dispatch} = useContext(UserContext);
  console.log('api key')
  console.log(GOOGLE_MAPS_APIKEY);
  
  return (
    <View style={{ flex: 0 }}>
      <GooglePlacesAutocomplete
        placeholder={placeholder}
        styles={{
          container: {
            flex: 0,
          },
          textInput: {
            fontSize: 18,
          },
        }}
        minLength={2}
        enablePoweredByContainer={false}
        query={{
          key: GOOGLE_MAPS_APIKEY,
          language: "en",
        }}
        // currentLocation={true}
        // currentLocationLabel='current location'
        nearbyPlacesAPI='GooglePlacesSearch'
        debounce={400}
        returnKeyType={"search"}
        fetchDetails={true}
        onPress={(data, details = null) => {
          console.log(data);
          console.log(details);
          dispatch({
            type: `ADD_${path}_LOCATION`,
            location: details.geometry.location,
          });
          dispatch({
            type: `ADD_${path}_DESCRIPTION`,
            description: data.description,
          });
        }}
      />
     </View>
  );
};

export default GooglePlaces;
