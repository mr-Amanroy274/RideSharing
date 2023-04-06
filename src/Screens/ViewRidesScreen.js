import React from "react";
import { FlatList } from "react-native";
import ListCard from "../Components/ListCard";
import Spacer from "../Components/Spacer";

import Data from "../Data";

const ViewRidesScreen = ({ navigation }) => {
  return (
    <>
      <FlatList
        data={Data}
        renderItem={({ item, index }) => (
          <>
            <ListCard
              title={item.Origin + " to " + item.Destination}
              date={item.Date}
              time={item.time}
              onPress={() => navigation.navigate("CarRidesDetails")}
            />
            {index !== Data.length - 1 && <Spacer bottomBorderWidth={1} />}
          </>
        )}
      />
    </>
  );
};

export default ViewRidesScreen;
