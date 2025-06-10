import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TomatoScreen from '../screens/TomatoScreen';
import PurpleScreen from '../screens/PurpleScreen';
import GoldScreen from '../screens/GoldScreen';
import {Ionicons} from "@expo/vector-icons"
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator 
        screenOptions={{
            tabBarActiveTintColor: "dodgerblue",
            tabBarInactiveTintColor: "#A7CCF6",
            tabBarStyle:{
                backgroundColor:"#fff",
            },
            tabBarLabelStyle:{
                fontSize: 15,
                fontWeight: "bold"
            },

        }}
    >
      <Tab.Screen options={{title: "Tomato", tabBarIcon: ({color}) => <AntDesign name="home" size={24} color={color} />}} name="TomatoScreen" component={TomatoScreen} />
      <Tab.Screen options={{title: "Purple", tabBarIcon: ({color}) => <AntDesign name="profile" size={24} color={color} />}} name="PurpleScreen" component={PurpleScreen} />
      <Tab.Screen options={{title: "Gold", tabBarIcon: ({color}) => <Feather name="settings" size={24} color={color} />}} name="GoldScreen" component={GoldScreen} />
    </Tab.Navigator>
  );
}