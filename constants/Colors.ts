/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { DefaultTheme } from "react-native-paper";

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};

export const Color = {
  light: {
    ...DefaultTheme.colors,
    primary: "white",
    secondary: "#FFBA4E",
    textFieldPrimary: "#DFDBDB",
    buttonPrimary: '#B02B34',
    buttonTextPrimary: '#ffffff',
    textPrimary: '#150000',
  },
  dark: {
    ...DefaultTheme.colors,
    primary: "#150000",
    secondary: "#FFBA4E",
    textFieldPrimary: "#2C1F20",
    buttonPrimary: '#B02B34',
    buttonTextPrimary: '#ffffff',
    textPrimary: 'white'
  }
};
