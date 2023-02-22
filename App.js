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

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMotorcycle } from "@fortawesome/free-solid-svg-icons/faMotorcycle";

import { setNavigator } from "./src/navigationRef";
import { Provider as AuthProvider } from "./src/Context/AuthContext";
import ViewRidesScreen from "./src/Screens/ViewRidesScreen";
import RideDetailsScreen from "./src/Screens/RideDetailsScreen";

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();
const TabBottom = createMaterialBottomTabNavigator();

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
        tabBarInactiveTintColor: "red",
      })}
    >
      <Tab.Screen
        name="Signup"
        component={SignUpScreen}
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

const CarTabScreen = () => {
  return(
    <Stack.Navigator>
        <Stack.Screen 
          name="CarScreen"
          component={CarScreen}
          options={{title: null, headerShown: false}}
        />
        <Stack.Screen
          name="CarRides"
          component={ViewRidesScreen}
          options={{title: 'Available Rides'}}
        />
        <Stack.Screen
          name="CarRidesDetails"
          component={RideDetailsScreen}
          options={{title:'Details'}}
        />
    </Stack.Navigator>
  )
}

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
            return <FontAwesomeIcon icon={faMotorcycle} size={26} />;
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
        component={BikeScreen}
        options={{ title: "Bike" }}
      />
      <TabBottom.Screen
        name="Car"
        component={CarTabScreen}
        options={{ title: "Car" }}
      />
      <TabBottom.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: "Settings" }}
      />
    </TabBottom.Navigator>
  );
};

const App = () => {
  return (
    <SafeAreaView>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Getting Started"
            component={GettingStartedScreen}
            options={{ title: null, headerShown: false }}
          />
          <Stack.Screen
            name="Authenticate"
            component={AuthenticationTabs}
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
    <AuthProvider>
      <App>
        ref=
        {(navigator) => {
          setNavigator(navigator);
        }}
      </App>
    </AuthProvider>
  );
};
