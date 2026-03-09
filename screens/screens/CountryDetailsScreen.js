import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function CountryDetailsScreen({ route }) {
  const { country } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{country.name}</Text>
      <Text style={styles.text}>Country: {country.country}</Text>
      <Text style={styles.text}>Population: {country.population}</Text>
      <Text style={styles.text}>Description:</Text>
      <Text style={styles.desc}>{country.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  text: { fontSize: 16, marginBottom: 5 },
  desc: { fontSize: 16, marginTop: 10 }
});