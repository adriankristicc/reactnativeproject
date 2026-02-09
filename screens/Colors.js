import { Text, StyleSheet, View, FlatList } from "react-native";

const colors = [
  { name: "Red", code: "#FF0000" },
  { name: "Green", code: "#00FF00" },
  { name: "Blue", code: "#0000FF" },
  { name: "Yellow", code: "#FFFF00" },
];

const ColorScreen = () => {
  return (
    <View>
      <Text>ColorScreen</Text>

      <FlatList
        data={colors}
        keyExtractor={(color) => color.name}
        renderItem={({ item }) => {
          return (
            <Text>
              {item.name} - {item.code}
            </Text>
          );
        }}
      />
    </View>
  );
};

export default ColorScreen;