import React,{useState} from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { LinearGradient } from "expo-linear-gradient";

//import files
import GetStarted from "./src/pages/GetStarted";
import Mode from "./src/pages/Mode";
import Signup from "./src/pages/Signup";
import Login from "./src/pages/Login";
import Verification from "./src/pages/Verification";
import { UserContext } from "./src/context/UserContext";

const Stack = createNativeStackNavigator();

export default function App() {
  const [data, setData] = useState(null);
  return (
    <UserContext.Provider value={{data,setData}}>

    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen
          name='GetStarted'
          component={GetStarted}
          options={{ title: "get started",headerBackTitle:''  }}
          />
        <Stack.Screen
          name='Mode'
          component={Mode}
          options={{ title: "mode",headerBackTitle:''  }}
        />
        <Stack.Screen
          name='Signup'
          component={Signup}
          options={{ title: "sign up" ,headerBackTitle:'' }}
        />
        <Stack.Screen
          name='Login'
          component={Login}
          options={{ title: "Log in",headerBackTitle:'' }}
        />
        <Stack.Screen
          name='Verification'
          component={Verification} 
          options={{ title: "Verification",headerBackTitle:''  }}
          />
      </Stack.Navigator>
      {/* <GetStarted /> */}
      <StatusBar style='auto' />
    </NavigationContainer>
</UserContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0EFF79",
    // alignItems: "center",
    // justifyContent: "flex-end",
    // paddingBottom: 50
    // backgroundColor: 'linear-gradient(326.68deg, #00F5FF 0%, #0EFF79 70.34%)'
  },
});
