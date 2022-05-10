import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import LandingScreen from "../screens/LandingScreen";

const AppNavigator = () => {
  const sessionToken = false;
  const { Navigator, Screen }: any = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Navigator
        headerMode="none"
        initialRouteName={sessionToken ? "LandingScreen" : "LoginScreen"}
      >
        <Screen name="LoginScreen" component={LoginScreen} />
        <Screen name="LandingScreen" component={LandingScreen} />
      </Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
