import { Text } from "@rneui/themed";
import React from "react";
import { Alert, TouchableOpacity, View } from "react-native";
import Spacer from "../Components/Spacer";

const RideDetailsScreen = ({navigation}) => {
  return (
    <>
      <View>
        <Spacer>
          <Text style={{ fontSize: 20, fontWeight: "500" }}>
            Rider Name: <Text style={{ fontWeight: "800" }}>Nabin Thapa</Text>
          </Text>
        </Spacer>
        <Spacer>
          <Text style={{ fontSize: 20, fontWeight: "500" }}>
            Vehicle Model:{" "}
            <Text style={{ color: "rebbecapurple", fontWeight: "900" }}>
              CRF RALLY 250
            </Text>
          </Text>
        </Spacer>
        <Spacer>
          <Text style={{ fontSize: 20, fontWeight: "500" }}>
            From:{" "}
            <Text style={{ color: "green", fontWeight: "900" }}>Kathmandu</Text>{" "}
            To: <Text style={{ color: "red", fontWeight: "900" }}>Pokhara</Text>
          </Text>
        </Spacer>
        <Spacer>
          <TouchableOpacity style={{
            padding: 15,
            backgroundColor:'green',
            marginHorizontal: 20,
            borderRadius: 5,
            elevation: 5
          }} onPress={()=>Alert.alert('Ride Booked','You will be notified shortly',[{
            text : 'Ok',
            onPress:() => navigation.navigate('Authenticated', {screen:"Bike"})
          }])}>
            <Text style={{
              textAlign: 'center',
              fontSize: 20,
              fontWeight:'700'
            }}>Book Ride</Text>
          </TouchableOpacity>
        </Spacer>
      </View> 
    </>
  );
};

export default RideDetailsScreen;
