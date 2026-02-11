import { Text, View, FlatList, StyleSheet } from "react-native";

const movies = [
  { title: "Inception", year: 2010 },
  { title: "Titanic", year: 1997 },
  { title: "Avatar", year: 2009 },
  { title: "Oppenheimer", year: 2023 },
  { title: "The Matrix", year: 1999 },
];

const MoviesScreen = () => {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22, marginBottom: 10 }}>MoviesScreen</Text>

      <FlatList
        data={movies}
        keyExtractor={(movie) => movie.title}
        renderItem={({ item }) => (
          <Text style={styles[item.year]}>
            {item.title} - {item.year}
          </Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  1997: {
    color: "blue",
    fontSize: 18,
  },
  1999: {
    color: "purple",
    fontSize: 20,
  },
  2009: {
    color: "orange",
    fontSize: 22,
  },
  2010: {
    color: "green",
    fontSize: 24,
  },
  2023: {
    color: "red",
    fontSize: 26,
    fontWeight: "bold",
  },
});

export default MoviesScreen;