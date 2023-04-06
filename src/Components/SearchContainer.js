import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Context as AuthContext } from "../Context/AuthContext";

const SearchContainer = ({
  setOrigin,
  setDestination,
  setDestinationPlaceId,
  setOriginPlaceId,
  handleSearch, 
  handleOfferRide,
  originRef,
  setDestinationName,
  setOriginName,
  destinationRef
}) => {
  const { state } = React.useContext(AuthContext);

  

  return (
    <View style={styles.searchContainer}>
      <GooglePlacesAutocomplete
      ref={originRef}
        placeholder="Origin Point"
        fetchDetails
        onPress={(data, details = null) => {
          setOrigin(details.geometry.location);
          setOriginPlaceId(details.place_id);
          setOriginName(details.formatted_address);
        }}
        query={{
          key: "AIzaSyDzcaRNKL8ggNx9ILX-RAJb9HmOqdSv0XE",
          language: "en",
          components: "country:NP",
        }}
      />
      <GooglePlacesAutocomplete
        placeholder="Destination Point"
        fetchDetails
        ref={destinationRef}
        onPress={(data, details = null) => {
          setDestination(details.geometry.location);
          setDestinationPlaceId(details.place_id);
          setDestinationName(details.formatted_address);
        }}
        query={{
          key: "AIzaSyDzcaRNKL8ggNx9ILX-RAJb9HmOqdSv0XE",
          language: "en",
          components: "country:NP",
        }}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSearch}>
          <Text style={styles.buttonText}>View Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.offerRide]} onPress={handleOfferRide}>
          <Text style={styles.buttonText}>Offer Rides</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 10,
    backgroundColor: "#fff",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    padding: 12,
    paddingHorizontal: 30,
    backgroundColor: "#3AEFE4",
    borderRadius: 12,
    elevation: 2,
  },
  buttonText: {
    fontWeight: "600",
    fontSize: 20,
    textAlign: "center",
  },
  offerRide: {
    backgroundColor: "#00FF66",
  },
});

export default SearchContainer;
