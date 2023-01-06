import React, { useEffect, useRef } from "react";
import Lottie from "lottie-react-native";
import { Animated, Easing, View } from "react-native";

const Splash = () => {
  const animationProgress = useRef(new Animated.Value(0));

  // useEffect(() => {
  //     Animated.timing(animationProgress.current, {
  //       toValue: 1,
  //       duration: 5000,
  //       easing: Easing.linear,
  //       useNativeDriver: false
  //     }).start();
  //   }, [])
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Lottie
        source={require("../../assets/olympic-athlete.json")}
        //   progress={animationProgress.current}
        autoPlay
        loop
      />
    </View>
  );
};

export default Splash;
