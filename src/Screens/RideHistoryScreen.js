import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "@rneui/themed";
import { FlatList } from "react-native";
import ListCard from "../Components/ListCard";
import Spacer from "../Components/Spacer";
import Data from "../Data";

const RideHistoryScreen = () => {
  return (
    <>
      <FlatList
        data={Data.slice(0,3)}
        renderItem={({ item, index }) => (
          <>
            <ListCard
              title={item.Origin + " to " + item.Destination}
              date={item.Date}
              time={item.time}
            />
            {index !== Data.length - 1 && <Spacer bottomBorderWidth={1} />}
          </>
        )}
      />
    </>
  );
};

const styles = StyleSheet.create({});
export default RideHistoryScreen;
