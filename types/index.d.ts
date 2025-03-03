import { Href } from "expo-router";
import { ImageSourcePropType } from "react-native";
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


type NavigationType = "home" | "restaurant" | "template" | "settings" | 'add-restaurant';
type DashboardSummaryType = "restaurant" | "menu" | "item" | "category";
type ActionCardType = "new restaurant" | "new menu" | "analytics" | "new category" | 'new item';
type PlaceholderType = "no-network" | "add-menu" | "add-restaurant" | 'add-menu-item';

export interface NavigationOption {
  type: NavigationType,
  title: string,
  name: string
}

export interface ActionCardOption {
   type: ActionCardType,
   title: string,
   image: ImageSourcePropType,
   route?: Href | null
}

export interface PlaceholderOption {
   type: PlaceholderType,
   image: ImageSourcePropType,
   label?:string
}