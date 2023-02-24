import { Button, Input, Text } from "@rneui/themed";
import React, { useContext, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import Spacer from "../Components/Spacer";
import auth from "@react-native-firebase/auth";
import { Context as AuthContext } from "../Context/AuthContext";
import { Alert } from "react-native";

const SignInScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState("");
  const [isPhoneVerified, setIsPhoneVerified] = useState(false);
  const { state, signin } = useContext(AuthContext);

  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }

  async function checkDatabase() {
    signin();
    // if (state.token) {

      signInWithPhoneNumber('+977 981-6439247');
      setIsPhoneVerified(true);
    // } else {
      // Alert.alert('User Not found', 'User with specified Phone Number does not exist. Please Sign up', [
      //   {text: 'OK', onPress: () => navigation.navigate('Signup')},
      // ]);
  
    
  }
  const formatNumber = (num) => {
    const first = num.slice(0, 3);
    const second = num.slice(3, 10);
    const number = `+977 ${first}-${second}`;
    return number;
  };


  return (
    <>
      <Spacer>
        <View style={{ flexDirection: "row" }}>
          <Input
            keyboardType="numeric"
            label="Phone Number"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            leftIcon={{ type: "font-awesome", name: "phone" }}
          />
        </View>
        {confirm && (
          <Input
            keyboardType="numeric"
            label="OTP"
            onChangeText={(text) => setCode(text)}
            leftIcon={{ type: "font-awesome", name: "key" }}
          />
        )}
        <Button
          onPress={isPhoneVerified ? () => navigation.navigate('Authenticated',{screen: 'Bike'}) : () => checkDatabase()}
          title={!confirm ? "Get OTP" : "Verify and Sign In"}
        />
      </Spacer>
      <Spacer>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text>Don't have an account? Sign up here</Text>
        </TouchableOpacity>
      </Spacer>
    </>
  );
};

export default SignInScreen;
