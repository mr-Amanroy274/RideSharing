import React from "react";
import { View } from "react-native";

const Spacer = ({ children, bottomBorderWidth }) => {
  return (
    <View
      style={{
        margin: 5,
        borderColor: "#555",
        borderTopWidth: bottomBorderWidth || 0,
      }}
    >
      {children}
    </View>
  );
};


export default Spacer;
