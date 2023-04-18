import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";


import GettingStartedScreen from "./src/Screens/GettingStartedScreen";
import SafeAreaView from "./src/Components/SafeAreaView";
import SignInScreen from "./src/Screens/SignInScreen";
import SignUpScreen from "./src/Screens/SignUpScreen";
import BikeScreen from "./src/Screens/BikeScreen";
import CarScreen from "./src/Screens/CarScreen";
import SettingsScreen from "./src/Screens/SettingsScreen";
import ViewRidesScreen from "./src/Screens/ViewRidesScreen";
import RideDetailsScreen from "./src/Screens/RideDetailsScreen";
import MyRideBookedScreen from "./src/Screens/MyBookedRideScreen";
import MyOfferedRideScreen from "./src/Screens/MyOfferedRideScreen";
import DriverSignUp from "./src/Screens/DriverSignUp";
import RideHistoryScreen from "./src/Screens/RideHistoryScreen";

import { Context as AuthContext } from "./src/Context/AuthContext";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import { setNavigator } from "./src/navigationRef";
import { Provider as AuthProvider } from "./src/Context/AuthContext";
import { Provider as LocationProvider } from "./src/Context/LocationContext";
import { StatusBar } from "react-native";



const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();
const TabBottom = createMaterialBottomTabNavigator();

const UnAuthenticatedStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Getting Started"
        component={GettingStartedScreen}
        options={{ title: null, headerShown: false }}
      />
      <Stack.Screen
        name="AuthenticationTabs"
        component={AuthenticationTabs}
        options={{ title: null, headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const SignUpStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{ title: null, headerShown: false }}
      />
      <Stack.Screen 
        name='DriverSignUp'
        component={DriverSignUp}
        options={{ title: null, headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const AuthenticationTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Signin") {
            iconName = focused ? "login-variant" : "login";
          } else if (route.name === "Signup") {
            iconName = !focused ? "sign-real-estate" : "sign-text";
          }
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
        tabBarActiveTintColor: "green",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Signup"
        component={SignUpStack}
        options={{ title: "Sign up" }}
      />
      <Tab.Screen
        name="Signin"
        component={SignInScreen}
        options={{ title: "Sign in" }}
      />
    </Tab.Navigator>
  );
};

const CarStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CarScreen"
        component={CarScreen}
        options={{ title: null, headerShown: false }}
      />
      <Stack.Screen
        name="CarRides"
        component={ViewRidesScreen}
        options={{ title: "Available Rides" }}
      />
      <Stack.Screen
        name="CarRidesDetails"
        component={RideDetailsScreen}
        options={{ title: "Details" }}
      />
    </Stack.Navigator>
  );
};

const BikeStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BikeScreen"
        component={BikeScreen}
        options={{ title: null, headerShown: false }}
      />
      <Stack.Screen
        name="CarRides"
        component={ViewRidesScreen}
        options={{ title: "Available Rides" }}
      />
      <Stack.Screen
        name="CarRidesDetails"
        component={RideDetailsScreen}
        options={{ title: "Details" }}
      />
    </Stack.Navigator>
  );
};

const SettingsStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{ title: null, headerShown: false }}
      />
      <Stack.Screen
        name="MyBookedRide"
        component= {MyRideBookedScreen}
        options={{ title: "My Booked Rides" }}
      />
      <Stack.Screen 
        name="MyOfferedRide"
        component={MyOfferedRideScreen}
        options={{ title: "My Offered Rides" }}
      />
      <Stack.Screen
        name="Ridehistory"
        component={RideHistoryScreen}
        options={{ title: "Ride History" }}
      />
    </Stack.Navigator>
  );
};

const AuthenticatedTabs = () => {
  return (
    <TabBottom.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;

          if (route.name === "Car") {
            iconName = focused ? "ios-car-sport" : "ios-car-sport-outline";
            return <Ionicons name={iconName} size={26} color={color} />;
          } else if (route.name === "Bike") {
            return <FontAwesome name='motorcycle' size={26} />;
          } else if (route.name === "Settings") {
            return !focused ? (
              <EvilIcons name="gear" size={26} color={color} />
            ) : (
              <FontAwesome name="gear" size={26} color={color} />
            );
          }
        },
        tabBarActiveTintColor: "green",
        tabBarInactiveTintColor: "red",
      })}
    >
      <TabBottom.Screen
        name="Bike"
        component={BikeStackScreen}
        options={{ title: "Bike" }}
      />
      <TabBottom.Screen
        name="Car"
        component={CarStackScreen}
        options={{ title: "Car" }}
      />
      <TabBottom.Screen
        name="Settings"
        component={SettingsStackScreen}
        options={{ title: "Settings" }}
      />
    </TabBottom.Navigator>
  );
};

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar styleS="light" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Unauthenticated"
            component={UnAuthenticatedStack}
            options={{ title: null, headerShown: false }}
          />
          <Stack.Screen
            name="Authenticated"
            component={AuthenticatedTabs}
            options={{ title: null, headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default () => {
  return (
    <LocationProvider>
    <AuthProvider>
      <App>
        ref=
        {(navigator) => {
          setNavigator(navigator);
        }}
      </App>
    </AuthProvider>
    </LocationProvider>
  );
};



