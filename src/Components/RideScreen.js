import React, { useState } from "react";
import { ToastAndroid } from "react-native";
import { Alert } from "react-native";
import { StyleSheet } from "react-native";
import Map from "./Map";
import SearchButton from "./SearchButton";
import SearchContainer from "./SearchContainer";
import { Context as LocationContext } from "../Context/LocationContext";
import DateTimePicker from "@react-native-community/datetimepicker";

const BikeScreen = ({ navigation, incomingVehicleType, addRides }) => {
  // To send
  const [destination, setDestination] = useState(null);
  const [origin, setOrigin] = useState(null);
  const [destinationPlaceId, setDestinationPlaceId] = useState(null);
  const [originPlaceId, setOriginPlaceId] = useState(null);
  const [destinationName, setDestinationName] = useState(null);
  const [originName, setOriginName] = useState(null);
  const [vehicleType, setVehicleType] = useState(incomingVehicleType || null);
  const [departureDate, setDepartureDate] = useState(new Date());
  const [departureTime, setDepartureTime] = useState(new Date());
  

  const [searchContainerState, setSearchContainerState] = useState(false);
  const { saveRide, searchRides } = React.useContext(LocationContext);
  const [isOfferingRide, setIsOfferingRide] = useState(false);
  const [show, setShow] = useState(true);
  const [mode, setMode] = useState("date");
  const [timeMode, setTimeMode] = useState("time");
  const [isDateSelected, setIsDateSelected] = useState(false);
  const [isTimeSelected, setIsTimeSelected] = useState(false);
  const [showTime, setShowTime] = useState(false);
  const originRef = React.useRef();
  const destinationRef = React.useRef();

  const onChangeDate = (event, selectedDate) => {
      setDepartureDate(selectedDate);
      setShow(false);
      setIsDateSelected(true);
  };

  const onChangeTime = (event, selectedTime) => {
      setDepartureTime(selectedTime);
      setShowTime(true);
      setIsTimeSelected(true);
  };

  const handleSearch = () => {
    if (destination && origin) {
      searchRides({
        destination,
        origin,
        destinationName,
        destinationPlaceId,
        originName,
        originPlaceId,
        vehicleType,
      });
      navigation.navigate("CarRides");
    }
  };

  const handleOfferRide = () => {
    setIsOfferingRide(true);
    if (isDateSelected) {
      if (destination && origin)
        Alert.alert(
          "Are you sure?",
          `Destination:${destinationName}\n\nOrigin:${originName}\n\nVehicle Type:${vehicleType}\n\nDeparture Date:${departureDate.toDateString()}\n\nDeparture Time:${formatAMPM(departureTime)}`,
          [
            ,
            {
              text: "Edit",
              onPress: () => {
                setShow(true);
                setShowTime(false);
                setIsOfferingRide(false);
                setIsDateSelected(false);
                setIsTimeSelected(false);
                originRef.current.focus();
              },
              style: "cancel",
            },
            {
              text: "OK",
              onPress: () => {
                setShow(true);
                setShowTime(false);
                setIsOfferingRide(false);
                setIsDateSelected(false);
                setIsTimeSelected(false);
                originRef.current.clear();
                destinationRef.current.clear();
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
                  date: departureDate.toDateString(),
                  time: formatAMPM(departureTime)
                });
                navigation.navigate("CarRides");
              },
            },
          ]
        );
      else {
        Alert.alert("Please enter origin and destination");
      }
    }
  };

  

const formatAMPM = (date) => {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}

  return (
    <>
      <Map destination={destination} origin={origin} />
      <SearchButton
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
          destinationRef={destinationRef}
        />
      )}
      {isOfferingRide && !isDateSelected && show && (
        <DateTimePicker
          minimumDate={new Date()}
          testID="DatePicker"
          value={departureDate}
          mode={mode}
          is24Hours={true}
          display="default"
          onChange={onChangeDate}
        />
      )}
      {isOfferingRide && !isTimeSelected && !showTime && (
        <DateTimePicker
          testID="TimePicker"
          value={departureTime}
          mode={timeMode}
          is24Hours={true}
          display="default"
          onChange={onChangeTime}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  cancel:{
    color: "red",
  }
});

export default BikeScreen;
