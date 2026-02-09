import { Text, View, FlatList, StyleSheet } from "react-native";

const movies = [
  { title: "Inception", year: 2010 },
  { title: "Titanic", year: 1990 },
  { title: "Avatar", year: 2000 },
  { title: "Oppenheimer", year: 2024 },
  { title: "The Matrix", year: 1999 },
];

const MoviesScreen = () => {
  return (
    <View>
      <Text>MoviesScreen</Text>

      <FlatList
        data={movies}
        keyExtractor={(movie) => movie.title}
        renderItem={({ item }) => {
          return (
            <Text style={item.year >= 2010 ? styles.newMovie : styles.oldMovie}>
              {item.title} - {item.year}
            </Text>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  newMovie: {
    color: "green",
    fontSize: 18,
  },
  oldMovie: {
    color: "blue",
    fontSize: 18,
  },
});

export default MoviesScreen;