import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "./src/screens/MainScreen";
import ExerciseScreen from "./src/screens/ExerciseScreen";
import ListScreen from "./src/screens/ListScreen";
import ButtonScreen from "./src/screens/ButtonScreen";
import MenuScreen from "./src/screens/MenuScreen";
import StudentsScreen from "./src/screens/StudentsScreen";
import BoxScreen from "./src/screens/BoxScreen";

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}