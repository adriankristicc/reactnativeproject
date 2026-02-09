import React from "react";
import { Text, StyleSheet, View } from "react-native";

// var, let, const
const ExerciseScreen = (props) => {
  var message = "Hi there!";

  message = "Hi there from Digital School!";

  return (
    <View>
      <Text style={styles.message1Style}>Hi there!</Text>
      <Text>{props.message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  message1Style: {
    fontSize: 30,
    color: "blue",
    fontStyle: "italic",
  },
  message2Style: {
    fontSize: 24,
    color: "red",
  },
});

export default ExerciseScreen;

// Ask students to create a Screen(Component) and to render at least two messages.
// Each message should have a style, for example, font color, font size, etc.
//  Ask them to use let and const variables as well. The screen
//  should be rendered in the App.
//