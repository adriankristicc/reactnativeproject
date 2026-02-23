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

      <Button
        title="Go Back to Main Screen"
        onPress={() => props.navigation.navigate("Main")}
      />

    
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Profile")}
      >
        <Text style={{ fontSize: 18, color: "blue", textAlign: "center", marginTop: 20 }}>
          Go to Profile Screen
        </Text>
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
});

export default MenuScreen;