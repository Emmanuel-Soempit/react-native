import "react-native-paper";

declare module "react-native-paper" {
  export interface ThemeColors {
    textFieldPrimary: string;
    buttonPrimary: string;
    textPrimary: string;
  }

  export interface MenufyTheme extends MD3Theme {
    colors: MD3Theme["colors"] & ThemeColors;
  }
}
