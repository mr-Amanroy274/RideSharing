import React, { useState, useEffect,useContext } from "react";
import { Button, TextInput, View, Text } from "react-native";
import auth from "@react-native-firebase/auth";
import { UserContext } from "../context/UserContext";

const Sms = ({phoneNumber}) => {
  const context = useContext(UserContext);
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    console.log("subscriber value");
    console.log(subscriber);
    return subscriber; // unsubscribe on unmount
  }, []);
  // If null, no SMS has been sent
  const [confirm, setConfirm] = useState(null);

  const [code, setCode] = useState("");

  // let confirmation= null;
  // Handle the button press
  async function signInWithPhoneNumber(phoneNumber) {
    console.log("confirmation1:");
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      console.log('confirmation value');
      console.log(confirmation);
      setConfirm(confirmation)
      confirmCode();
    } catch (err) {
      console.log('confirmation error')
      console.log(err);
    }
  }
  
  // setInterval(()=>{setConfirm(confirmation)},5000) 
  console.log("confirmation:");
  async function confirmCode() {
    try {
      await confirm.confirm(context.data?.code);
      console.log('code confirmed')
    } catch (error) {
      console.log("Invalid code.");
    }
  }

  console.log(!confirm)
  console.log('confirmatsjflsjdlfjsl')
  if (confirm) {
    // return (
    //   <></>
      // <Button
      //   title='Phone Number Sign In'
      //   onPress={() => signInWithPhoneNumber(`+977 ${phoneNumber}`)}
      //   // onPress={() => signInWithPhoneNumber("+977 981-6439247")}
      // />
      signInWithPhoneNumber(`+977 ${context.data?.number}`)
      console.log(context.data?.number)
      console.log('data')
    // );
  }

  // Handle user state changes
  async function onAuthStateChanged(user) {
    console.log('users data are here')
    console.log(user);
    // setUser(user);
    // if (initializing) setInitializing(false);
  }


  // return (
  //   <></>

  //   <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
  //   <TextInput style={{height:30,borderWidth:2,width:100,borderColor:"red"}} value={code} onChangeText={(text) => setCode(text)} />
  //   <Button title='Confirm Code' onPress={() => confirmCode()} />
  // </View>
  // );
};

export default Sms;
