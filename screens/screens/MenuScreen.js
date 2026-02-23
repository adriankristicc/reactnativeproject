import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const MenuScreen = (props) => {
  console.log(props.navigation);
  return (
    <View>
      <Text style={styles.text}>Welcome to Menu Screen</Text>
      <Button
        title="Go to List Screen"
        onPress={() => props.navigation.navigate("List")}
      />

      <TouchableOpacity
        style={styles.btn}
        onPress={() => props.navigation.navigate("Students")}
      >
        <Text style={styles.btnText}>Go to Students Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => props.navigation.navigate("Box")}
      >
        <Text style={styles.btnText}>Go to Box Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    marginVertical: 20,
    fontSize: 20,
    textAlign: "center",
  },
  btn: {
    backgroundColor: "#3446eb",
    marginVertical: 7,
    paddingVertical: 10,
  },
  btnText: {
    color: "white",
    fontSize: 15,
    textTransform: "uppercase",
    textAlign: "center",
  },
});

export default MenuScreen;