
import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const StudentScreen = () => {

  const firstName = "Adrian";
  const lastName = "Kristić";
  const birthday = "12.05.2010";

  let fullName = firstName + " " + lastName;

  const hobbies = [
    { id: "1", name: "Bilijar" },
    { id: "2", name: "Programiranje" },
    { id: "3", name: "Skijanje" },
    { id: "4", name: "Igrice" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student Info</Text>

      <Text style={styles.text}>Full Name: {fullName}</Text>
      <Text style={styles.text}>Birthday: {birthday}</Text>

      <Text style={styles.subtitle}>Hobbies:</Text>

      <FlatList
        data={hobbies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.hobby}>{item.name}</Text>
        )}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    marginTop: 15,
    fontSize: 18,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
  },
  hobby: {
    fontSize: 16,
    padding: 5,
    backgroundColor: "#e3e3e3",
    marginVertical: 4,
    borderRadius: 5,
  },
});

export default StudentScreen;