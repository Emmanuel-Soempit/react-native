import { UiText, UiView } from "@/components";
import { ConstantColors } from "@/constants/Colors";
import { DashboardSummaryType } from "@/types";
import { Image, ImageSourcePropType, StyleSheet } from "react-native";
import Restaurant from "@/assets/images/restaurant.png";
import Template from "@/assets/images/template.png";
import Category from "@/assets/images/category.png";

interface SummaryCardProps {
  type: DashboardSummaryType;
  value: number;
}

function SummaryCard({ type, value }: SummaryCardProps) {
  const imageSource = (): ImageSourcePropType => {
    switch (type) {
      case "restaurant":
        return Restaurant;
      case "menu":
        return Template;
      case "category":
        return Category;
      case "item":
        return Category;
    }
  };

  const textSource = () => {
    switch (type) {
      case "restaurant":
        return 'Restaurants';
      case "menu":
        return 'Menus';
      case "category":
        return 'Categories';
      case "item":
        return 'Items';
    }
  };

  return (
    <UiView style={style.cardWarp}>
      <Image style={{height: 30, width: 30, objectFit: 'contain'}} source={imageSource()} />
      <UiText style={{fontWeight: 600}} variant="headlineMedium">{value}</UiText>
      <UiText  variant="labelSmall">{textSource()}</UiText>
    </UiView>
  );
}

const style = StyleSheet.create({
  cardWarp: {
    borderRadius: 10,
    backgroundColor: ConstantColors.cardColor,
    padding: 10,
    gap:5,
    width: "24%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: 'center'
  },
});

export default SummaryCard;
