import { Image, ImageSourcePropType, useColorScheme } from "react-native";
import HomeInactive from "@/assets/images/home-inactive.png";
import HomeActive from "@/assets/images/home-active.png";
import HomeDark from "@/assets/images/home-dark.png";
import RestaurantInactive from "@/assets/images/restaurant-inactive.png";
import RestaurantActive from "@/assets/images/restaurant-active.png";
import RestaurantDark from "@/assets/images/restaurant-dark.png";
import TemplateInactive from "@/assets/images/template-inactive.png";
import TemplateActive from "@/assets/images/template-active.png";
import TemplateDark from "@/assets/images/template-dark.png";
import SettingsInactive from "@/assets/images/settings-inactive.png";
import SettingsActive from "@/assets/images/settings-active.png";
import SettingsDark from "@/assets/images/settings-dark.png";
import { NavigationType } from "@/types";

interface UiTabIconprops {
  type: NavigationType
  active: boolean;
}

function UiTabIcon({ type, active }: UiTabIconprops) {
  const colorScheme = useColorScheme();

  const imageSource = (): ImageSourcePropType => {
    switch (type) {
      case "home":
        return !active
          ? HomeInactive
          : colorScheme === "light"
          ? HomeActive
          : HomeDark;
      case "restaurant":
        return !active
          ? RestaurantInactive
          : colorScheme === "light"
          ? RestaurantActive
          : RestaurantDark;
      case "template":
        return !active
          ? TemplateInactive
          : colorScheme === "light"
          ? TemplateActive
          : TemplateDark;
      case "settings":
        return !active
          ? SettingsInactive
          : colorScheme === "light"
          ? SettingsActive
          : SettingsDark;
    }
  };

  return <Image source={imageSource()} style={{padding:10}} />;
}

export default UiTabIcon;
