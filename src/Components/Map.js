import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import {
  enableNetworkProviderAsync,
  getBackgroundPermissionsAsync,
  getCurrentPositionAsync,
  isBackgroundLocationAvailableAsync,
  requestBackgroundPermissionsAsync,
  requestForegroundPermissionsAsync,
} from "expo-location";

const Map = ({ destination, origin }) => {
  const [location, setLocation] = useState(null);
  const locationStatus = async () => {
    await getBackgroundPermissionsAsync();
    const permission = await isBackgroundLocationAvailableAsync();
    try {
      const location = await getCurrentPositionAsync();
      setLocation(location);
    } catch (err) {
      await enableNetworkProviderAsync();
      await requestBackgroundPermissionsAsync();
      await requestForegroundPermissionsAsync();
      console.log(err);
    }
  };

  useEffect(() => {
    locationStatus();
  }, [location]);

  return (
    location && (
      <MapView
        style={{ height: "100%", width: "100%" }}
        initialRegion={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        toolbarEnabled={false}
        loadingEnabled
      >
        {origin && (
          <Marker coordinate={{ latitude: origin.lat, longitude: origin.lng }} title='Your Pickup Point'>
            <View style={[styles.marker, styles.originMarker]}></View>
          </Marker>
        )}
        {destination && (
          <Marker
            coordinate={{
              latitude: destination.lat,
              longitude: destination.lng,
            }}
            title='Your Destination'
          >
            <View style={[styles.marker, styles.destinationMarker]}></View>
          </Marker>
        )}
        {origin && destination && (
          <MapViewDirections
            origin={{ latitude: origin.lat, longitude: origin.lng }}
            destination={{ longitude: destination.lng, latitude: destination.lat }}
            apikey="AIzaSyDzcaRNKL8ggNx9ILX-RAJb9HmOqdSv0XE"
            strokeWidth={5}
            strokeColor="#6391db"
          />
        )}
        {location && (
          <Marker coordinate={{ ...location.coords }} title='Your Location'>
            <View style={styles.marker}></View>
          </Marker>
        )}
      </MapView>
    )
  );
};

const styles = StyleSheet.create({
  marker: {
    backgroundColor: "red",
    padding: 5,
    borderRadius: 10,
  },
  destinationMarker: {
    backgroundColor: "#63db8d",
  },
  originMarker: {
    backgroundColor: "#b767e6",
  },
});

export default Map;



