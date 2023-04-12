import React from "react";
import { Icon, Text } from "@rneui/themed";
import { TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { View } from "react-native";

const ListCard = ({ onPress, title, date, time,fontWeight }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View>
        <Text style={[styles.text, {fontWeight}]}>{title}</Text>
        {date && time && <View style={{ flexDirection: "row" }}>
          <Text style={[styles.text, styles.time]}>{date}</Text>
          <Text style={[styles.text, styles.time]}>{time}</Text>
        </View>}
      </View>
      <Icon name="chevron-right" style={styles.icon} />
    </TouchableOpacity>
  );
};

ListCard.defaultProps = {
  onPress: () => {},
  title: "My Offered Rides",
  date: null,
  time: null,
  fontWeight: "bold",
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 5,
    margin: 10,
  },
  text: {
    fontSize: 16,
    marginLeft: 10,
  },
  time:{
    fontSize: 14,
    marginLeft: 10,
    paddingVertical: 5,
    opacity: 0.5,
    },
});

export default ListCard;


