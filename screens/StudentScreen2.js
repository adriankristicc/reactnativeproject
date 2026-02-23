import React from "react";
import { Text, View, StyleSheet } from "react-native";
import StudentDetails from "../components/StudentDetails";

const StudentsScreen = () => (
  <View>
    <Text style={styles.text}>Students Screen</Text>
    <StudentDetails
      name="Ellie"
      image={require("../../assets/Avatar-1.jpeg")}
      desc={"Lorem ipms dolor ist amaten"}
    />
    <StudentDetails
      name="Gabriel"
      image={require("../../assets/Avatar-2.png")}
      desc={"Lorem ipms dolor ist amaten"}
    />
    <StudentDetails
      name="Kaylen"
      image={require("../../assets/Avatar-3.png")}
      desc={"Lorem ipms dolor ist amaten"}
    />
  </View>
);

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontSize: 20,
    marginVertical: 20,
  },
});

export default StudentsScreen;