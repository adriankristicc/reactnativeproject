import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = ({ params }) => (
  <View
    style={{
      flex: 1,
      flexDirection: "row",
      flexWrap: "wrap",
      alignContent: "space-between",
    }}
  >
    <View
      style={{
        width: 200,
        height: 100,
        backgroundColor: "red",
      }}
    />
    <View style={{ width: 200, height: 100, backgroundColor: "yellow" }} />
    <View style={{ width: 200, height: 100, backgroundColor: "green" }} />
    <View style={{ width: 200, height: 100, backgroundColor: "blue" }} />
  </View>
);

const styles = StyleSheet.create({});

export default BoxScreen;