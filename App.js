import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "./src/screens/MainScreen";
import ExerciseScreen from "./src/screens/ExerciseScreen";
import ListScreen from "./src/screens/ListScreen";
import ButtonScreen from "./src/screens/ButtonScreen";
import MenuScreen from "./src/screens/MenuScreen";
import StudentsScreen from "./src/screens/StudentsScreen";
import BoxScreen from "./src/screens/BoxScreen";
import PostsScreen from "./src/screens/PostsScreen";
import CountriesScreen from "./src/screens/CountriesScreen";
import CountryDetailsScreen from "./src/screens/CountryDetailsScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Home" component={MainScreen} />
        <Stack.Screen name="Button" component={ButtonScreen} />
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="Exercise" component={ExerciseScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Students" component={StudentsScreen} />
        <Stack.Screen name="Box" component={BoxScreen} />
        <Stack.Screen name="Posts" component={PostsScreen} />
        <Stack.Screen name="Countries" component={CountriesScreen} />
        <Stack.Screen name="CountryDetails" component={CountryDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// E
// Create a FruitScreen component that
// displays the names of two fruits using let and const variables.

// M
// Create a QuoteScreen component that displays a quote and its author.
// Use let and const variables for the quote and author.

// H
// Create a FactsScreen component that displays three facts.
// Use a combination of let and const variables and different styles for each fact.