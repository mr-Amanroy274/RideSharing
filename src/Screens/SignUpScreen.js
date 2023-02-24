import { Button, Input, Text } from "@rneui/themed";
import React, { useContext, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Question from "../Components/Question";
import Spacer from "../Components/Spacer";
import auth from "@react-native-firebase/auth";
import { Context as AuthContext } from "../Context/AuthContext";
import DateTimePicker from '@react-native-community/datetimepicker';

const SignUpScreen = ({ navigation }) => {
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [ownsPrivateVehicle, setOwnsPrivateVehicle] = useState(false);
  const [willingToOfferRide, setWillingToOfferRide] = useState(false);
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState("");
  const [isPhoneVerified, setIsPhoneVerified] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [currentAddress, setCurrentAddress] = useState("");
  const [text, setText] = useState('Enter your birth date');
  const [show, setShow] = useState(false)
  const [mode, setMode] = useState('date')
  const { state, signup } = useContext(AuthContext);
  const [isRider, setIsRider] = useState(false);

  async function signInWithPhoneNumber(phoneNumber) {
    try{

      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      console.log('here is confirmation')
      console.log(confirmation)
      setConfirm(confirmation);
    }catch(err){
      console.log("confirmation error");
      console.log(err);
    }
  }
  
  const onChange = (event,selectedDate) => {
    const currentDate = selectedDate || dateOfBirth;
    let tempDate = new Date(currentDate);
    console.log(tempDate , new Date().getTime())
    let fDate = tempDate.getDate() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getFullYear()
    setDateOfBirth(currentDate)
    setText(fDate)
    setShow(false);
  }
  const formatNumber = (num) => {
    console.log(num);
    const first = num.slice(0, 3);
    const second = num.slice(3, 10);
    const number = `+977 ${first}-${second}`;
    console.log(number);
    return number;
  };
  
  const showMode = (currentMode) =>{
    setShow(true);
    setMode(currentMode);
    
  }
  const signUp = () => {
    signup({phoneNumber, firstName, lastName, dateOfBirth, currentAddress});
  };
  
  const GetNumber = () => {
    const number = formatNumber(phoneNumber);
    console.log(number);
    signInWithPhoneNumber('+977 986-7066744');
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
      <>
        <Spacer>
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
          <View style={{ width: "99%", marginLeft: 10, marginBottom:20, borderBottomColor:'#808080' }}>
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
          <Button title="Sign up" onPress={() => setIsSigningUp(true)} />
        </Spacer>
      </>
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
      {confirm && (
        <Input
          keyboardType="numeric"
          label="OTP"
          onChangeText={(text) => setCode(text)}
          leftIcon={{ type: "font-awesome", name: "key" }}
        />
      )}
      <Button
        onPress={
          !confirm
            ? () => {
                signInWithPhoneNumber('+977 981-6439247')
            }
            : () => setIsPhoneVerified(true)
        }
        title={!confirm ? "Get OTP" : "Verify"}
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
  date:{
    color: "#444",
    fontSize: 18,
  },
  textError:{
    fontSize : 12,
    padding:10,
    color:'red'
  }
});

export default SignUpScreen;
