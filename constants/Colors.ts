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
    secondary: "#FFBD59",
    textFieldPrimary: "#E0DCDC",
    buttonPrimary: '#B02B34',
    buttonTextPrimary: '#ffffff',
    textPrimary: '#150000',
    textSecondary: '150000',
    outline: '#150000',
    onSurfaceVariant: "gray",
    gray: "#E0DCDC",
    border: "#150000",
    lightGray: "#FAF7F7",
  },
  dark: {
    ...DefaultTheme.colors,
    primary: "#150000",
    secondary: "#FFBD59",
    textFieldPrimary: "#2C1F20",
    buttonPrimary: '#B02B34',
    buttonTextPrimary: '#ffffff',
    textPrimary: '#ffffff',
    textSecondary: '#120000',
    onSurfaceVariant: "white",
    gray: "#E0DCDC",
    border: "#E0DCDC",
    lightGray: "#FAF7F7",
  }
};

export const ConstantColors = {
  gray: "#E0DCDC",
  lightGray: "#FAF7F7",
  cardColor: "#F5CBCC",
  textSecondary: '#120000',

}