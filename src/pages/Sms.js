import React, { useState, useEffect, useContext } from "react";
import auth from "@react-native-firebase/auth";
import { UserContext } from "../context/UserContext";
import { ADD_CONFIRM, ADD_PHONENUMBER } from "../context/action.types";

let confirm = null;
export function sendOTP(number) {
  // const { state } = useContext(UserContext);
  console.log("phone number in sentotp");
  console.log(number);
  // const [initializing, setInitializing] = useState(true);
  // const [user, setUser] = useState();
  // useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //   console.log("subscriber value");
  //   // console.log(subscriber);
  //   return subscriber; // unsubscribe on unmount
  // }, []);

  async function onAuthStateChanged(user) {
    console.log("users data are here");
    console.log(user);
    // setUser(user);
    // if (initializing) setInitializing(false);
  }
  async function signInWithPhoneNumber(phoneNumber) {
    console.log("confirmation1:");
    try {
      let confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      console.log("confirmation value");
      console.log(confirmation);
      confirm = confirmation;
      // confirmCode();
    } catch (err) {
      console.log("confirmation error");
      console.log(err);
    }
  }
  if (number) {
    signInWithPhoneNumber(`+977 ${number}`);
    //     .then(() => console.log("solved"))
    //     .catch((err) => console.log(err));
  }
}

// export default sendOTP;

export const confirmCode = async (navigation, code) => {
  // const { state } = useContext(UserContext);
  try {
    console.log("confirmation");
    console.log(confirm);
    console.log(code);
    const credential = auth.PhoneAuthProvider.credential(
      confirm.verificationId,
      code
    );
    console.log("credential");
    console.log(credential);
    // await confirm.confirm(code);
    console.log("code confirmed");
    navigation.navigate("MapScreen");
  } catch (error) {
    console.log(error.code, error.message);
    alert("invalid code");
    navigation.goBack();
  }
};

// const Sms = () => {/
// useEffect(() => {
//   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//   console.log("subscriber value");
//   console.log(subscriber);
//   return subscriber; // unsubscribe on unmount
// }, []);
// If null, no SMS has been sent
// const [confirm, setConfirm] = useState(null);

// const [code, setCode] = useState("");

// let confirmation= null;
// Handle the button press

// setInterval(()=>{setConfirm(confirmation)},5000)
// console.log("confirmation:");
// if (context.data?.code) {
//   confirmCode();
// }

// console.log(state.confirm);
// console.log("confirmatsjflsjdlfjsl");
// if (confirm) {
//   // return (
//   //   <></>
//   // <Button
//   //   title='Phone Number Sign In'
//   //   onPress={() => signInWithPhoneNumber(`+977 ${phoneNumber}`)}
//   //   // onPress={() => signInWithPhoneNumber("+977 981-6439247")}
//   // />
//   signInWithPhoneNumber(`+977 ${context.data?.number}`);
//   console.log(context.data?.number);
//   console.log("data");
//   // );
// }

// Handle user state changes

// return (
//   <></>

//   <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//   <TextInput style={{height:30,borderWidth:2,width:100,borderColor:"red"}} value={code} onChangeText={(text) => setCode(text)} />
//   <Button title='Confirm Code' onPress={() => confirmCode()} />
// </View>
// );
// };

// export default Sms;
