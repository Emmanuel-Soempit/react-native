import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { useColorScheme } from "@/hooks/useColorScheme";
import { MenufyTheme, useTheme } from "react-native-paper";
import { UiTabIcon } from "@/components/";
import { navigationOptions } from "@/constants/navigation-options";
import { NavigationProvider } from "@/providers";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const { colors } = useTheme<MenufyTheme>();

  // const darkBackground = () => <UiView customStyle={{backgroundColor: colors.buttonPrimary, height: '100%'}}/>

  return (
    <NavigationProvider>
    <Tabs
      screenOptions={{
        tabBarActiveTintColor:
          colorScheme === "light" ? colors.buttonPrimary : colors.secondary,
        tabBarInactiveTintColor:
          colorScheme === "light" ? colors.gray : colors.textPrimary,
        headerShown: false,
        tabBarButton: HapticTab,
        // tabBarBackground: colorScheme === 'light' ? TabBarBackground : darkBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
            height: "7%",
            backgroundColor:
              colorScheme === "light" ? '#ffffff' : colors.buttonPrimary,
          },
          default: {},
          android: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
            height: "7%",
            backgroundColor:
              colorScheme === "light" ? colors.ligthGray : colors.buttonPrimary,
          },
        }),
      }}
    >
      {navigationOptions.map((currentOption) => (
        <Tabs.Screen
          key={currentOption.type}
          name={currentOption.name}
          options={{
            title: currentOption.title,
            tabBarIcon: ({ color, focused }) => (
              <UiTabIcon type={currentOption.type} active={focused} />
            ),
          }}
        />
      ))}
    </Tabs>
    </NavigationProvider>
  );
}
