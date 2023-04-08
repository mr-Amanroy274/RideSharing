import React, { useContext, useState } from "react";
import { Button, Input, Text } from "@rneui/themed";
import { StyleSheet, TouchableOpacity, View, Alert } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import { Context as AuthContext } from "../Context/AuthContext";
import Spacer from "../Components/Spacer";
import Question from "../Components/Question";
import ImagePicker from '../Components/ImagePicker';
import { ScrollView } from "react-native";

const SignUpScreen = ({ navigation }) => {
  // Used for rendering the Forms
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [ownsPrivateVehicle, setOwnsPrivateVehicle] = useState(false);
  const [willingToOfferRide, setWillingToOfferRide] = useState(false);
  const [isPhoneVerified, setIsPhoneVerified] = useState(false);
  const [otp, setOTP] = useState("");

  // Used for storing the data
  const [phoneNumber, setPhoneNumber] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [currentAddress, setCurrentAddress] = useState("");
  const [isRider, setIsRider] = useState(false);
  const [image, setImage] = useState(null);

  // Date Picker
  const [text, setText] = useState("Enter your birth date");
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState("date");

  // Context
  const { state, signup, verifyOTP, sendOTP } = useContext(AuthContext);

  // React.useEffect(()=>{},[state.OTPInfo.success])

  function signInWithPhoneNumber(phoneNumber) {
      sendOTP({phoneNumber : '+977' + phoneNumber});
  }

  const checkOTP = () => {
    verifyOTP({phoneNumber:'+977' + phoneNumber, otp});
    if(state.OTPInfo.success){
      setIsPhoneVerified(true);
    }else{
      Alert.alert("Invalid OTP");
    }
  };
  

  const onChange = (event, selectedDate) => {
    setShow(false);
    const currentDate = selectedDate || dateOfBirth;
    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      "-" +
      (tempDate.getMonth() + 1) +
      "-" +
      tempDate.getFullYear();
    setDateOfBirth(currentDate);
    setText(fDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const signUp = () => {
    const profile = new FormData();
    profile.append('image', {
      uri: image,
      type: 'image/jpeg',
      name: 'image.jpg',
    });
    signup({
      phoneNumber,
      firstName,
      lastName,
      dateOfBirth,
      currentAddress,
      isRider,
      profile
    });
  };

  const checkValue= () => {
    if (
      phoneNumber.length === 10 &&
      firstName.length > 0 &&
      lastName.length > 0 &&
      currentAddress.length > 0 &&
      text !== "Enter your birth date"
    ) {
      setIsSigningUp(true);
    }
    else if (phoneNumber.length !== 10) {
      alert("Please enter a valid phone number");
    }
    else if (firstName.length === 0) {
      alert("Please enter your first name");
    }
    else if (lastName.length === 0) {
      alert("Please enter your last name");
    }
    else if (currentAddress.length === 0) {
      alert("Please enter your current address");
    }
    else if (text === "Enter your birth date") {
      alert("Please enter your birth date");
    }
  };

  const checkPhone = () => {
    if(phoneNumber.length === 10){
      signInWithPhoneNumber('+977'+phoneNumber);
    }else
    {
      alert("Please enter a valid phone number");
    }
  }

  if(willingToOfferRide){
    navigation.navigate("DriverSignUp");
  }

  if (isPhoneVerified && isSigningUp) {
    return (
      <>
        <Spacer>
          <Question
            question="Do you own any private Vehicle?"
            ownsPrivateVehicle={setOwnsPrivateVehicle}
            signUp={signUp}
            navigation={navigation}
          />
        </Spacer>
        {ownsPrivateVehicle && (
          <Question
            question="Are you willing to offer ride?"
            navigation={navigation}
            signUp={signUp}
            ownsPrivateVehicle={setWillingToOfferRide}
          />
        )}
      </>
    );
  }

  if (isPhoneVerified) {
    return (
      <ScrollView>
        <Spacer>
          <Input
            label="Phone Number"
            value={phoneNumber}
            leftIcon={{ type: "font-awesome", name: "phone" }}
          />
          <Input
            label="First Name"
            value={firstName}
            onChangeText={(text) => {
              setFirstName(text);
            }}
            leftIcon={{ type: "font-awesome", name: "user" }}
          />
          <Input
            label="Last Name"
            value={lastName}
            onChangeText={(text) => {
              setLastName(text);
            }}
            leftIcon={{ type: "font-awesome", name: "user" }}
          />
          <View
            style={{
              width: "99%",
              marginLeft: 10,
              marginBottom: 20,
              borderBottomColor: "#808080",
            }}
          >
            <Text style={styles.textInputTitle}>
              Birth Date<Text style={{ color: "red" }}> *</Text>
            </Text>
            <TouchableOpacity
              style={[
                styles.textInput,
                {
                  width: "100%",
                  height: 50,
                  borderBottomWidth: 1,
                  paddingTop: 10,
                },
              ]}
              onPress={() => showMode()}
            >
              <Text style={styles.date}>{text}</Text>
            </TouchableOpacity>
            {show && (
              <DateTimePicker
                maximumDate={new Date()}
                minimumDate={new Date(1900, 0, 1)}
                testID="DatePicker"
                value={dateOfBirth}
                mode={mode}
                is24Hours={true}
                display="default"
                onChange={onChange}
              />
            )}
          </View>
          <Input
            label="Current Address"
            value={currentAddress}
            onChangeText={(text) => {
              setCurrentAddress(text);
            }}
            leftIcon={{ type: "font-awesome", name: "map-marker" }}
          />
          <ImagePicker
            setImage={setImage}
            image={image}
            title="Upload your profile picture"
          />
          <Button title="Sign up" onPress={checkValue} />
        </Spacer>
      </ScrollView>
    );
  }

  return (
    <>
      <Input
        label="Phone Number"
        keyboardType="numeric"
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
        leftIcon={{ type: "font-awesome", name: "phone" }}
      />
      {state.OTPInfo !==null && (
        <Input
          keyboardType="numeric"
          label="OTP"
          onChangeText={(text) => setOTP(text)}
          leftIcon={{ type: "font-awesome", name: "key" }}
        />
      )}
      <Button
        onPress={
          state.OTPInfo === null
            ? checkPhone
            : checkOTP
        }
        title={state.OTPInfo === null ? "Get OTP" : "Verify"}
      />
      <Spacer>
        <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
          <Text>Already have an account? Sign in here</Text>
        </TouchableOpacity>
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  textInputTitle: {
    fontSize: 18,
    color: "#808080",
    fontWeight: "bold",
  },
  date: {
    color: "#444",
    fontSize: 18,
  },
  textError: {
    fontSize: 12,
    padding: 10,
    color: "red",
  },
});

export default SignUpScreen;
