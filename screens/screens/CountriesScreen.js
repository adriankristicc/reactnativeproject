import React from "react";
import { Text, View, StyleSheet, FlatList, TextInput, TouchableOpacity } from "react-native";
import data from "../data/countries.json";

export default class CountriesScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      countries: [],
      searchText: "", 
    };
  }

  componentDidMount() {
    this.setState({
      countries: data,
    });
  }

  handleSearch = (text) => {
    this.setState({ searchText: text });
  };

  render() {
    
    const filteredCountries = this.state.countries.filter(
      (item) =>
        item.name.toLowerCase().includes(this.state.searchText.toLowerCase()) ||
        item.country.toLowerCase().includes(this.state.searchText.toLowerCase())
    );

    return (
      <View style={{ flex: 1, padding: 10 }}>
        <Text style={styles.screenTitle}> Countries Screen </Text>

        <TextInput
          style={styles.searchInput}
          placeholder="Search by city or country"
          value={this.state.searchText}
          onChangeText={this.handleSearch}
        />

        <FlatList
          data={filteredCountries}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.cardWrapper}
              onPress={() =>
                this.props.navigation.navigate("CountryDetails", { country: item })
              }
            >
              <Text>City name: {item.name}</Text>
              <Text>Country name: {item.country}</Text>
              <Text>Description: {item.description}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screenTitle: {
    fontSize: 20,
    textAlign: "center",
    marginVertical: 15,
    fontWeight: "bold",
  },
  searchInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 8,
    marginBottom: 10,
  },
  cardWrapper: {
    backgroundColor: "#d6d6d6",
    marginBottom: 10,
    padding: 10,
  },
});