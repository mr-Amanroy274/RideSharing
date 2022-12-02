import React, { useState, useRef, useEffect, useContext } from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native-paper";
import auth from "@react-native-firebase/auth";
import { UserContext } from "../context/UserContext";

//import sms file
import Sms from "../config/Sms";

const Verification = ({ navigation }) => {
  const context = useContext(UserContext);
  const textInput = useRef(null);
  //   const [textInput, setTextInput] = useState(null);
  const lengthInput = 6;
  let clockCall = null;
  const defaultCountdown = 30;
  const [internalVal, setInternalVal] = useState("");
  const [countdown, setCountdown] = useState(defaultCountdown);
  const [enableResend, setEnableResend] = useState(false);
  const [confirm, setConfirm] = useState(null);

  // const [code, setCode] = useState("");
  console.log("runq");
  console.log(context.data?.number);
  //sms ko lagi ho
  // useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //   console.log("subscriber value");
  //   console.log(subscriber);
  //   return subscriber; // unsubscribe on unmount
  // }, []);

  useEffect(() => {
    // textInput?.current.focus();
    // console.log('input')
    // console.log(textInput?.current.focus())
  }, []);
  useEffect(() => {
    clockCall = setInterval(() => {
      decrementClock();
    }, 1000);
    return () => {
      clearInterval(clockCall);
    };
  }, [countdown]);

  const decrementClock = () => {
    if (countdown === 0) {
      setEnableResend(true);
      setCountdown(0);
      clearInterval(clockCall);
    } else {
      setCountdown(countdown - 1);
    }
  };

  const onChangeText = (val) => {
    setInternalVal(val);
    console.log(internalVal.length);
    if (val.length === lengthInput) {
      console.log(typeof val);
      console.log(val);
      console.log(internalVal);
      context.setData({ code: val });
      // navigation.navigate('Signup')
    }
  };

  const onChangeNumber = () => {
    setInternalVal("");
  };

  const onResendOTP = () => {
    if (enableResend) {
      setCountdown(defaultCountdown);
      setEnableResend(false);
      clearInterval(clockCall);
      clockCall = setInterval(() => {
        decrementClock();
      }, 1000);
    }
  };

  //sms ko lagi

  // async function signInWithPhoneNumber(phoneNumber) {
  //   console.log("confirmation1:");
  //   try {
  //     const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
  //     console.log('confirmation value');
  //     console.log(confirmation);
  //     setConfirm(confirmation)
  //   } catch (err) {
  //     console.log('confirmation error')
  //     console.log(err);
  //   }
  // }

  // console.log("confirmation:");
  // async function confirmCode() {
  //   try {
  //     await confirm.confirm(code);
  //     console.log('code confirmed')
  //   } catch (error) {
  //     console.log("Invalid code.");
  //   }
  // }

  return (
    <View style={styles.container}>
      <View style={{ flex: 0.2, padding: 10, justifyContent: "flex-end" }}>
        <Text style={{ fontSize: 30 }}>Verification</Text>
      </View>
      <KeyboardAvoidingView
        // keyboardVerticalOffset={20}
        // behavior={"padding"}
        style={styles.containerAvoiddingView}
      >
        {/* <Text style={styles.titleStyle}>
          {"Input your OTP code sent via sms"}
        </Text> */}
        <View>
          <TextInput
            // ref={(input) => {
            //   console.log(input);
            //   textInput.current = input;
            //   console.log(textInput);

            // textInput=input;
            //   setTextInput(input)
            // }}
            autoFocus
            onChangeText={onChangeText}
            style={{ width: 0, height: 0 }}
            value={internalVal}
            maxLength={lengthInput}
            returnKeyType='done'
            keyboardType='numeric'
          />
          <View style={styles.containerInput}>
            {Array(lengthInput)
              .fill()
              .map((data, index) => (
                <View
                  style={[
                    styles.cellView,
                    {
                      borderBottomColor:
                        index === internalVal.length ? "#FB6C6A" : "#234db7",
                    },
                  ]}
                  key={index}
                >
                  <Text
                    style={styles.cellText}
                    onPress={() => textInput.focus()}
                  >
                    {internalVal && internalVal.length > 0
                      ? internalVal[index]
                      : ""}
                  </Text>
                </View>
              ))}
          </View>
          <View style={{ marginTop: 20 }}>
            <Text>OTP is sent to your mobile number</Text>
            <Text style={{ textAlign: "center", fontWeight: "bold" }}>
              {"+977 9804804550"}
            </Text>
          </View>
        </View>
        <View style={styles.bottomView}>
          <TouchableOpacity onPress={onChangeNumber}>
            <View style={styles.btnChangeNumber}>
              <Text style={styles.textChange}>Change Number</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={onResendOTP}>
            <View style={styles.btnResend}>
              <Text
                style={[
                  styles.textResend,
                  {
                    color: enableResend ? "#234DB7" : "grey",
                  },
                ]}
              >
                Resend OTP({countdown})
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Verification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0FE3FF",
    // alignItems: 'flex-end',
    justifyContent: "flex-end",
  },
  containerAvoiddingView: {
    flex: 0.8,
    alignItems: "center",
    padding: 10,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 60,
  },
  textTitle: {
    marginTop: 50,
    marginBotton: 50,
    fontSize: 16,
  },
  containerInput: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  cellView: {
    paddingVertical: 11,
    width: 40,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1.5,
  },
  cellText: {
    textAlign: "center",
    fontSize: 16,
  },
  bottomView: {
    flexDirection: "row",
    flex: 1,
    // justifyContent: "center",
    marginBottom: 50,
    alignItems: "flex-end",
    // backgroundColor: "red",
  },
  btnChangeNumber: {
    width: 150,
    height: 50,
    borderRadius: 10,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  textChange: {
    color: "#234DB7",
    alignItems: "center",
    fontSize: 15,
  },
  btnResend: {
    width: 150,
    height: 50,
    borderRadius: 10,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  textResend: {
    alignItems: "center",
    fontSize: 15,
  },
});
