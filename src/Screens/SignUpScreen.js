import { Button, Input, Text } from "@rneui/themed";
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Question from "../Components/Question";
import Spacer from "../Components/Spacer";
// import auth from "@react-native-firebase/auth";

const SignUpScreen = ({ navigation }) => {
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [ownsPrivateVehicle, setOwnsPrivateVehicle] = useState(false);
  const [willingToOfferRide, setWillingToOfferRide] = useState(false);
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState("");
  const [isPhoneVerified, setIsPhoneVerified] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }

  async function confirmCode() {
    try {
      await confirm.confirm(code);
    } catch (error) {
      console.log("Invalid code.");
    }
  }

  if (isSigningUp) {
    return;
    <>
      <Spacer>
        <Question
          question="Do you own any private Vehicle?"
          ownsPrivateVehicle={setOwnsPrivateVehicle} 
          navigation={navigation}
        />
      </Spacer>
      {ownsPrivateVehicle && (
        <Question
          question="Are you willing to offer ride?"
          navigation={navigation}
          ownsPrivateVehicle={setWillingToOfferRide}
        />
      )}
    </>;
  }

  if (isPhoneVerified) {
    return (
      <>
        <Spacer>
          <Input label="Current Address" />
          <Button title="Sign up" onPress={() => setIsSigningUp(true)} />
        </Spacer>
        <Spacer>
          <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
            <Text>Don't have an account? Sign in here</Text>
          </TouchableOpacity>
        </Spacer>
      </>
    );
  }

  // return (
  //   <>
  //     <Input
  //       keyboardType="numeric"
  //       label="Phone Number"
  //       value={phoneNumber}
  //       onChange={(text) => setPhoneNumber(text)}
  //     />
  //     {confirm && (
  //       <Input
  //         keyboardType="numeric"
  //         label="OTP"
  //         onChangeText={(text) => setCode(text)}
  //       />
  //     )}
  //     <Button
  //       onPress={!confirm?() => signInWithPhoneNumber("+1 650-555-3434"):()=>setIsPhoneVerified(true)}
  //       title={!confirm? "Get OTP" : "Verify"}
  //     />
  //   </>
  // );

  return <>
    <Text>Sign Up</Text>
  </>
};

const styles = StyleSheet.create({});

export default SignUpScreen;
