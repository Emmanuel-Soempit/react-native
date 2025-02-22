import * as React from "react";
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper";
import { useColorScheme } from "react-native";
import { Color } from "@/constants/Colors";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const colorScheme = useColorScheme();
 

  const theme =
    colorScheme === "light"
      ? {
          ...DefaultTheme,
          colors: Color.light,
        }
      : {
          ...DefaultTheme,
          colors: Color.dark,
        };

  return <PaperProvider theme={theme}>{children}</PaperProvider>;
}
