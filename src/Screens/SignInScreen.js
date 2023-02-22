import { Button, Input, Text } from "@rneui/themed";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import Spacer from "../Components/Spacer";

const SignInScreen = ({navigation}) => {
  return (
    <>
      <Spacer>
        <Input label='Username' />
        <View style={{flexDirection:'row'}}>
        <Input value="+977"/>
        <Input keyboardType="numeric" label="Phone Number" />
        </View>
        <Button
            title='Sign In'
        />
      </Spacer>
      <Spacer>
      <TouchableOpacity onPress={()=> navigation.navigate('Signup')}>
        <Text>Don't have an account? Sign up here</Text>
      </TouchableOpacity>
      </Spacer>
    </>
  );
};

export default SignInScreen;
