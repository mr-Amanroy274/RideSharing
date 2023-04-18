import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "@rneui/themed";
import Spacer from "./Spacer";

const DetailCard = ({
  firstLabel,
  secondLabel,
  firstValue,
  secondValue,
  firstLabelColor,
  secondLabelColor,
}) => {
  return (
    <Spacer>
      <Text style={{ fontSize: 18, fontWeight: "500" }}>
        {firstLabel}
        {": "}
        <Text style={{ color:  firstLabelColor , fontWeight: "900" }}>
          {firstValue}
        </Text>{" "}
        {secondLabel}{" "}
        <Text style={{ color: secondLabelColor , fontWeight: "900" }}>
          {secondValue}
        </Text>
      </Text>
    </Spacer>
  );
};

// Setting default values for the card
DetailCard.defaultProps = {
    firstLabel:"",
    secondLabel:"",
    firstValue:"",
    secondValue:"",
    firstLabelColor:"#000",
    secondLabelColor:"#000",
};

const styles = StyleSheet.create({});
export default DetailCard;
