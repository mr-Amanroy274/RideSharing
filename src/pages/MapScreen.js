import React, { useContext, useState,useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  PermissionsAndroid
} from "react-native";
import tw from "twrnc";
import Map from "../components/Map";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Geolocation from "react-native-geolocation-service";

// import { GOOGLE_MAPS_APIKEY } from "@env";
import GooglePlaces from "../components/GooglePlaces";
// import MapView from "react-native-maps";

//import files
import { UserContext } from "../context/UserContext";
import NavigationCard from "../components/NavigationCard";
import car from "../.././assets/car.png";
import motorbike from "../.././assets/motorbike.png";

const MapScreen = () => {
  const Stack = createNativeStackNavigator();
  const { state, dispatch } = useContext(UserContext);
  const [currentLatitude, setCurrentLatitude] = useState(null);
  const [currentLongitude, setCurrentLongitude] = useState(null);

  const [carSelected, setCarSelected] = useState(false);
  const [bikeSelected, setBikeSelected] = useState(false);

   
  useEffect(() => {
    requestPermission();
  }, []);
  // useEffect(() => {
  //   hasLocation();
    

  // })
  const requestPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Cool Photo App Camera Permission",
          message:
            "Cool Photo App needs access to your camera " +
            "so you can take awesome pictures.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK",
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        // setHasLocationPermission(true);
        console.log("You can use the camera");
        Geolocation.getCurrentPosition(
          (position) => {
              console.log(position);
              console.log('latitude')
              console.log(position.coords.latitude);
              console.log('longitude')
              console.log(position.coords.longitude);
             setCurrentLatitude(position.coords.latitude);
             setCurrentLongitude(position.coords.longitude);
                dispatch({ type: "ADD_CURRENT_LOCATION", location: {currentLatitude,currentLongitude} });
              },
              (error) => {
                  // See error code charts below.
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
      } else {
        console.log("Camera permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const CarSelected = () => {
    setCarSelected(true);
    setBikeSelected(false);
    console.log('curent value')
    console.log(currentLatitude);
    console.log(currentLongitude);
  };

  const BikeSelected = () => {
    setCarSelected(false);
    setBikeSelected(true);
  };

  return (
    <View style={{ flex: 1 }}>
      <Map style={styles.map} lat={currentLatitude} lng={currentLongitude} />
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
