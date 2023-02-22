import React from "react";
import { FlatList } from "react-native";
import Rides from "../Components/Rides";

import Data from "../Data";

const ViewRidesScreen = ({navigation}) => {
  return (
    <>
      <FlatList
        data={Data}
        keyExtractor={item=> item.id}
        renderItem={({ item }) => (
          <Rides
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
