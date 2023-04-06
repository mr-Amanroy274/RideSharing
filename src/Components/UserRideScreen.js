import { Icon } from "@rneui/themed";
import React from "react";
import { Alert } from "react-native";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import { Image } from "react-native";
import { Linking } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import DetailCard from "../Components/DetailCard";
import SettingCard from "../Components/SettingCard";
import Spacer from "../Components/Spacer";
import { Context as AuthContext } from "../Context/AuthContext";
import Data from "../Data";

const UserRideScreen = ({
  status,
  nameLabel,
  phoneNumber,
  phoneLabel,
  date,
  time,
  origin,
  destination,
  showUserInfo,
  name,
  handleNo,
  handleYes,
  vehicleModelName,
  vehicleModel,
}) => {
  const { state } = React.useContext(AuthContext);
  const item = Data[0];

  return (
    <ScrollView>
      <Image
        source={require("../../assets/CRF250.png")}
        style={{ width: 200, height: 200, resizeMode: "contain" }}
      />
      <SettingCard
        buttonTitle="Cancel Ride"
        color={"red"}
        type="feather"
        logo="trash"
        padding={0}
        onPress={() =>
          Alert.alert("Cancel Ride", "Are you sure?", [
            {
              text: "no",
              onPress: handleNo,
              style: "#4AA96C",
            },
            {
              text: "yes",
              onPress: handleYes,
              style: "#4AA96C",
            },
          ])
        }
      >
        <Spacer>
          <DetailCard
            firstLabel="Origin"
            firstValue={origin}
            firstLabelColor="green"
          />
        </Spacer>
        <Spacer bottomBorderWidth={1} />
        <Spacer>
          <DetailCard
            firstLabel="Destination"
            firstValue={destination}
            firstLabelColor="red"
          />
        </Spacer>
        <Spacer bottomBorderWidth={1} />
        <Spacer>
          <DetailCard firstLabel="Date" firstValue={date} />
        </Spacer>
        <Spacer bottomBorderWidth={1} />
        <Spacer>
          <DetailCard firstLabel=" Time" firstValue={time} />
        </Spacer>
        {status && (
          <>
            <Spacer bottomBorderWidth={1} />
            <Spacer>
              <DetailCard firstLabel="Status" firstValue={status} />
            </Spacer>
          </>
        )}
        {showUserInfo  && (
          <>
            {vehicleModel && (
              <>
                <Spacer bottomBorderWidth={1} />
                <Spacer>
                  <DetailCard
                    firstLabel={vehicleModelName}
                    firstValue={vehicleModel}
                  />
                </Spacer>
              </>
            )}
            <Spacer bottomBorderWidth={1} />
            <Spacer>
              <DetailCard firstLabel={nameLabel} firstValue={name} />
            </Spacer>
            <Spacer bottomBorderWidth={1} />
            <Spacer>
              <TouchableOpacity
                onPress={() => Linking.openURL(`tel:${phoneNumber}`)}
                style={{
                  flexDirection: 'row',
                  alignItems:"center",
                  justifyContent: 'space-between'
                }}
              >
                <DetailCard firstLabel={phoneLabel} firstValue={phoneNumber} />
                <Icon name='phone' type='feather' color='green' 
                  style={{
                    marginRight: 20
                  }}
                />
              </TouchableOpacity>
            </Spacer>
          </>
        )}
      </SettingCard>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default UserRideScreen;
