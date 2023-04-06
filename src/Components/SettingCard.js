import { Icon, Text } from "@rneui/themed";
import React from "react";
import { TouchableOpacity } from "react-native";
import { View } from "react-native";
import { StyleSheet } from "react-native";

const SettingCard = ({ children, buttonTitle, logo, onPress,color, type, padding }) => {
  return (
    <>
      <View style={{padding}} >{children}</View>
      <TouchableOpacity style={[styles.signOutButton,{borderColor: color,}]} onPress={onPress}>
        <Text style={[styles.signout, {color}]}>{buttonTitle}</Text>
        <Icon name={logo} type={type} color={color} />
      </TouchableOpacity>
    </>
  );
};

SettingCard.defaultProps = {
  buttonTitle: "Sign Out",
  logo: "log-out",
  onPress: () => {},
  color: "#f00",
  type: "feather",
  padding: 10,
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  signout: {
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "center",
    padding: 10,
  },
  signOutButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    margin: 10,
    borderRadius: 25,
    backgroundColor: "#f2f2f2",
    borderWidth: 1,
  },
});

export default SettingCard;
