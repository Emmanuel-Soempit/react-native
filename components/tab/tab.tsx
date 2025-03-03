import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Icon } from "react-native-paper";

function TabNavigation() {
  const Tab = createMaterialBottomTabNavigator();

  return (
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="white"
        inactiveColor="#aaa"
        barStyle={{ backgroundColor: "#6200ea" }} // Purple background
      >
        <Tab.Screen
          name="home"
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }:any) => (
              <Icon source="home" color={color} size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="explore"
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color }:any) => (
              <Icon source="account" color={color} size={24} />
            ),
          }}
        />
      </Tab.Navigator>
  );
}

export default TabNavigation;
