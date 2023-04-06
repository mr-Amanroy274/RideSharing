import React, { useContext, useState } from "react";
import { Button, Input, Text } from "@rneui/themed";
import { TouchableOpacity, View } from "react-native";
import auth from "@react-native-firebase/auth";

import Spacer from "../Components/Spacer";
import { Context as AuthContext } from "../Context/AuthContext";

const SignInScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState("");
  const [isPhoneVerified, setIsPhoneVerified] = useState(false);
  const { state, signin } = useContext(AuthContext);


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
