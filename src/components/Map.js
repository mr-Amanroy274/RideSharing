import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View, PermissionsAndroid } from "react-native";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import tw from "twrnc";
import { GOOGLE_MAPS_APIKEY } from "@env";
import Geolocation from "react-native-geolocation-service";

//import files
import { UserContext } from "../context/UserContext";

const Map = ({ lat = 27.7172, lng = 85.324 }) => {
  const { state } = useContext(UserContext);
  
  console.log("origin");
  console.log(lat);
  console.log(lng);
  
  const initialRegion = {
    latitude: 27.7172,
    longitude: 85.324,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  };
  
  const getInitialState = {
    latitude: 27.7172,
    longitude: 85.324,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  };
  
  const onRegionChange = () => {
    console.log('region changed')
    return {
      latitude: lat,
      longitude: lng,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
    };
  };
  const [data, setData] = useState(getInitialState);
  
  return (
    <MapView
      style={tw`flex-1`}
      region={data}
      // onRegionChange={onRegionChange}
      // initialRegion={data}
    >
      {(lat || state?.originLocation) && state.destinationLocation && (
        <MapViewDirections
          origin={
            lat && lng
              ? { latitude: lat, longitude: lng }
              : state.originDescription
          }
          // origin={state.originDescription}
          destination={state.destinationDescription}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor='black'
        />
      )}
      {state?.destinationLocation.lat && (
        <Marker
          coordinate={{
            latitude: state.destinationLocation.lat,
            longitude: state.destinationLocation.lng,
          }}
          title='destination'
          description={state.destinationDescription}
          identifier='destination'
        />
      )}
      {lat && lng && (
        <Marker
          coordinate={{
            // latitude: state.originLocation.lat,
            // longitude: state.originLocation.lng,
            latitude: lat,
            longitude: lng,
          }}
          title='origin'
          description={"latitude: " + lat + "longitude: " + lng}
          identifier='origin'
        />
      )}
    </MapView>
  );
};

export default Map;

// import React, { useState, useEffect } from "react";
// import {
//   View,
//   StyleSheet,
//   SafeAreaView,
//   Image,
//   Dimensions,
//   StatusBar,
//   TextInput,
//   PermissionsAndroid,
//   TouchableWithoutFeedback,
//   Text,
// } from "react-native";
// import * as Location from "expo-location";
// import MapView, { Marker } from "react-native-maps";
// import tw from "twrnc";
// // import { useFonts } from "expo-font";

// export default function Map() {
//   console.log("map");
//   const [location, setLocation] = useState({});
//   const [errorMsg, setErrorMsg] = useState(null);
//   const [coords, setCoords] = useState(null);
//   const [MarkerOpacity, setMarkerOpacity] = useState(0.0);
//   // const [loaded] = useFonts({
//   //   PoppinsRegular: require("../../assets/fonts/Poppins-Regular.ttf"),
//   //   PoppinsSemiBold: require("../../assets/fonts/Poppins-SemiBold.ttf"),
//   // });
//   const mapRef = React.createRef();

//   useEffect(() => {
//     (async () => {
//       let { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== "granted") {
//         setErrorMsg("Permission to access location was denied");
//         return;
//       }

//       let location = await Location.getCurrentPositionAsync({});
//       setLocation(location);
//       setCoords({
//         latitude: location.coords.latitude,
//         longitude: location.coords.longitude,
//       });
//     })();
//   }, []);

//   useEffect(() => {
//     (async () => {
//       if (location) {
//         mapRef.current.animateCamera({
//           center: {
//             latitude: location.coords.latitude,
//             longitude: location.coords.longitude,
//           },
//           zoom: 18,
//         });
//       }
//     })();
//   }, []);

//   if (!loaded) {
//     return null;
//   }

//   let text = "Waiting..";
//   if (errorMsg) {
//     text = errorMsg;
//   } else if (location) {
//     text = JSON.stringify(location);
//     // console.log(GetLocation.getCurrentPosition({"latitude":location.coords.latitude, "longitude": location.coords.longitude}))
//   }

//   return (
//     <SafeAreaView style={[tw`flex-1`, styles.escapeStatusBar]}>
//       <MapView
//         style={[tw`flex-1`]}
//         ref={mapRef}
//         minZoomLevel={0}
//         maxZoomLevel={20}
//         showsUserLocation={true}
//         followsUserLocation={true}
//         userLocationUpdateInterval={500}
//       >
//         <Marker
//           opacity={1.0}
//           draggable
//           coordinate={{
//             latitude: coords ? coords.latitude : 0,
//             longitude: coords ? coords.longitude : 0,
//           }}
//         />
//       </MapView>

//       <View style={styles.container}>
//         <View
//           styles={{
//             flex: 1,
//             flexDirection: "row",
//             justifyContent: "space-evenly",
//             padding: 20,
//             width: Dimensions.get("window").width,
//           }}
//         >
//           <View
//             style={[
//               styles.bottombordercar,
//               styles.bottomBorder,
//               { left: 100, padding: 2 },
//             ]}
//           >
//             <Image
//               style={[styles.tinycar]}
//               source={require("../../assets/car.png")}
//             />
//             {/* <Image style={styles.tinycar} source={require('./assets/motorbike.png')} /> */}
//           </View>
//           <View
//             style={[
//               styles.bottomborderbike,
//               // styles.bottomBorder,
//               { backgroundColor: "white", left: 250, top: -47, padding: 2 },
//             ]}
//           >
//             <Image
//               style={styles.tinycar}
//               source={require("../../assets/motorbike.png")}
//             />
//           </View>
//         </View>
//         <View style={styles.inputContainer}>
//           <Text style={styles.textInputTitle}>Origin</Text>
//           <TextInput style={styles.textInput} />
//           <Text style={styles.textInputTitle}>Destination</Text>
//           <TextInput style={styles.textInput} />
//         </View>
//         <View
//           style={{
//             flex: 1,
//             flexDirection: "row",
//             justifyContent: "space-evenly",
//             padding: 20,
//             width: Dimensions.get("window").width,
//             top: -47,
//           }}
//         >
//           <TouchableWithoutFeedback>
//             <View style={[styles.customButtom, { backgroundColor: "#3AEFE4" }]}>
//               <Text style={styles.buttonText}>View Rides</Text>
//             </View>
//           </TouchableWithoutFeedback>
//           <TouchableWithoutFeedback>
//             <View style={styles.customButtom}>
//               <Text style={styles.buttonText}>Offer Rides</Text>
//             </View>
//           </TouchableWithoutFeedback>
//         </View>
//       </View>
//       <View style={styles.potraitView}>
//         <Image
//           style={{ height: 50, width: 50, borderRadius: 25 }}
//           resizeMode='contain'
//           source={require("../../assets/images.jpeg")}
//         />
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "#fff",
//     alignItems: "flex-start",
//     justifyContent: "flex-start",
//     position: "absolute",
//     bottom: 0,
//     height: "40%",
//     width: Dimensions.get("window").width,
//     borderTopLeftRadius: 30,
//     borderTopRightRadius: 30,
//   },
//   tinycar: {
//     height: 40,
//     width: 50,
//   },
//   bottomBorder: {
//     borderBottomWidth: 3,
//     borderRadius: 3,
//   },
//   bottombordercar: {
//     borderBottomColor: "green",
//   },
//   bottomborderbike: {
//     borderBottomColor: "green",
//   },
//   escapeStatusBar: {
//     marginTop: StatusBar.currentHeight,
//   },
//   textInput: {
//     paddingBottom: 10,
//     paddingLeft: 15,
//     borderBottomColor: "#e3bb9a",
//     borderBottomWidth: 1,
//     width: "85%",
//     fontSize: 14,
//   },
//   textInputTitle: {
//     fontSize: 18,
//     marginTop: 20,
//     color: "#e3bb9a",
//     fontFamily: "PoppinsRegular",
//   },
//   customButtom: {
//     backgroundColor: "#00FF66",
//     width: 160,
//     height: 50,
//     borderRadius: 15,
//     shadowColor: "#171717",
//     shadowOpacity: 0.2,
//     shadowOffset: { width: -2, height: 4 },
//     shadowRadius: 2,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   buttonText: {
//     fontSize: 16,
//     fontFamily: "PoppinsSemiBold",
//   },
//   inputContainer: {
//     marginLeft: 30,
//     width: Dimensions.get("window").width,
//     top: -47,
//   },
//   potraitView: {
//     alignItems: "center",
//     justifyContent: "center",
//     height: 60,
//     width: 60,
//     borderRadius: 60 / 2,
//     padding: 10,
//     position: "absolute",
//     top: 10,
//     left: 10,
//     borderWidth: 4,
//     borderColor: "#6d706e",
//   },
// });
