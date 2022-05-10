import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppNavigator from "./src/navigation/AppNavigator";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <>
      <AppNavigator />
    </>
  );
}
