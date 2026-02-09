// 1. LIBRARY
import React from "react";
import { Text, StyleSheet, View } from "react-native";

// 2. KOMPONENTE
const MainScreen = () => {
  return (
    <View>
      <Text style={styles.textStyle}>This is Main Screen</Text>
    </View>
  );
};

// 3. STYLES
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

// 4. EXPORT
export default MainScreen;