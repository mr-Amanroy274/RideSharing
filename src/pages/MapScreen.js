import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import tw from "twrnc";
import Map from "../components/Map";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
// import { GOOGLE_MAPS_APIKEY } from "@env";
import GooglePlaces from "../components/GooglePlaces";
// import MapView from "react-native-maps";

//import files
import NavigationCard from "../components/NavigationCard";
import car from "../.././assets/car.png";
import motorbike from "../.././assets/motorbike.png";

const MapScreen = () => {
  const Stack = createNativeStackNavigator();
  const [carSelected, setCarSelected] = useState(false);
  const [bikeSelected, setBikeSelected] = useState(false);

  const CarSelected = () => {
    setCarSelected(true);
    setBikeSelected(false);
  };

  const BikeSelected = () => {
    setCarSelected(false);
    setBikeSelected(true);
  };

  return (
    <View style={{ flex: 1 }}>
      <Map style={styles.map} />
      <View
        style={
          carSelected || bikeSelected ? styles.selected : styles.notSeleted
        }
      >
        <KeyboardAvoidingView>
          <View style={styles.image}>
            <TouchableOpacity
              onPress={CarSelected}
              style={[
                styles.imageSizeTouch,
                carSelected ? styles.borderBottom : "",
              ]}
            >
              <Image source={car} style={styles.imageSize} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={BikeSelected}
              style={[
                styles.imageSizeTouch,
                bikeSelected ? styles.borderBottom : "",
              ]}
            >
              <Image source={motorbike} style={styles.imageSize} />
            </TouchableOpacity>
          </View>

          {carSelected || bikeSelected ? (
            <View style={styles.showInput}>
              <View
                style={{
                  width: "75%",
                  borderBottomColor: "#C7C7CC",
                  borderBottomWidth: 1,
                  marginTop: 10,
                }}
              >
                <Text style={{ fontSize: 20 }}>Destination</Text>
                {/* <TextInput
                placeholder='Where do want to go?'
                style={{ fontSize: 20, fontWeight: "bold", paddingBottom: 10 }}
              /> */}
                <GooglePlaces
                  path='DESTINATION'
                  placeholder='Where do you want to go?'
                />
              </View>
              <View
                style={{
                  width: "75%",
                  borderBottomColor: "#C7C7CC",
                  borderBottomWidth: 1,
                  marginTop: 10,
                }}
              >
                <Text style={{ fontSize: 20 }}>Starting Point</Text>
                {/* <TextInput
                  placeholder='From Where?'
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    paddingBottom: 10,
                  }}
                /> */}
                <GooglePlaces path='ORIGIN' placeholder='From Where?' />
              </View>
              <View
                style={{
                  width: "90%",
                  flexDirection: "row",
                  justifyContent: "space-around",

                  alignItems: "flex-end",
                  marginTop: 30,
                }}
              >
                <TouchableOpacity>
                  <View
                    style={[
                      styles.button,
                      {
                        backgroundColor: "#3AEFE4",
                      },
                    ]}
                  >
                    <Text style={{ fontSize: 20 }}>View Rides</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View
                    style={[
                      styles.button,
                      {
                        backgroundColor: "#00FF66",
                      },
                    ]}
                  >
                    <Text style={{ fontSize: 20 }}>Offer Ride</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            ""
          )}
        </KeyboardAvoidingView>
      </View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  map: {
    flex: 2,
  },
  size: {
    borderTopLeftRadius: 50,
  },
  image: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 20,
    elevation: 3,
  },
  notSeleted: {
    flex: 0.2,
    elevation: 3,
    borderTopLeftRadius: 50,

    shadowColor: "black",
  },
  selected: {
    flex: 1,
    borderTopLeftRadius: 50,
    elevation: 3,
    shadowColor: "black",
    // paddingTop: 20,
  },
  imageSizeTouch: {
    width: 60,
    height: 55,
  },
  borderBottom: {
    borderColor: "black",
    borderBottomWidth: 10,
    borderRadius: 15,
  },
  imageSize: {
    width: 60,
    height: 60,
  },
  showInput: {
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  button: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 15,
  },
});
