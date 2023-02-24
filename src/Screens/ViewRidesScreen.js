import React from "react";
import { FlatList } from "react-native";
import Rides from "../Components/Rides";

import Data from "../Data";

const ViewRidesScreen = ({navigation}) => {
  return (
    <>
      <FlatList
        data={Data}
        renderItem={({ item }) => (
          <Rides
          key={item.id}
            origin={item.Origin}
            destination={item.Destination}
            date={item.Date}
            onPress={()=>navigation.navigate(`CarRidesDetails`)}
          />
        )}
      />
    </>
  );
};

export default ViewRidesScreen;
