import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../page/home";

const Tab = createBottomTabNavigator();

export function TabRouter() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Life" component={Home} />
      <Tab.Screen name="Test" component={Home} />
    </Tab.Navigator>
  );
}
