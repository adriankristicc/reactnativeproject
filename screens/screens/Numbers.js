import { Text, View, FlatList } from "react-native";

const numbers = [
  { value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }, { value: 5 },
  { value: 6 }, { value: 7 }, { value: 8 }, { value: 9 }, { value: 10 },
  { value: 11 }, { value: 12 }, { value: 13 }, { value: 14 }, { value: 15 },
  { value: 16 }, { value: 17 }, { value: 18 }, { value: 19 }, { value: 20 },
];

const NumbersScreen = () => {
  return (
    <View>
      <Text>NumbersScreen</Text>

      <FlatList
        data={numbers}
        keyExtractor={(num) => num.value.toString()}
        renderItem={({ item }) => {
          return <Text>{item.value}</Text>;
        }}
      />
    </View>
  );
};

export default NumbersScreen;