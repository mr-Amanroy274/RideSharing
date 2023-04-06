import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Text } from "@rneui/themed";
import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";

const Rides = ({origin,destination, date, onPress}) => {
  return (
    <>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <View style={{ padding: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: "800" }}>
            {origin}-{destination}
          </Text>
          <Text style={{ fontSize: 20, fontWeight: "500" }}>{date}</Text>
        </View>
        <View>
          <FontAwesomeIcon icon={faAngleRight} size={30} />
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#c5c7c6",
    padding: 5,
    margin: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
});

export default Rides;
