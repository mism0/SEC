import { createStackNavigator } from "@react-navigation/stack";
import TomatoScreen from "../screens/TomatoScreen";
import GoldScreen from "../screens/GoldScreen";
import PurpleScreen from "../screens/PurpleScreen";

const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="TomatoScreen"
    >
      <Stack.Screen
        options={{
          headerShown: true,
          title: "Purple",
        }}
        name="PurpleScreen"
        component={PurpleScreen}
      />
      <Stack.Screen name="GoldScreen" component={GoldScreen} />
      <Stack.Screen name="TomatoScreen" component={TomatoScreen} />
    </Stack.Navigator>
  );
}

export default MainStackNavigator;
