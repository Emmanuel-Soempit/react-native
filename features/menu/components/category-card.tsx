import { UiText, UiView } from "@/components";
import {  TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { MenufyTheme, useTheme } from "react-native-paper";

function CategoryCard({ id, name, items }: Category) {
  const router = useRouter();
  const { colors } = useTheme<MenufyTheme>();

  return (
    <TouchableOpacity
      onPress={() => {
        router.push(`/(tabs)/(restaurant)/${id}/${id}/${id}`);
      }}
      style={{ marginTop: 10, width: '30%'} }
    >
      <UiView
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
          backgroundColor: colors.textFieldPrimary,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: colors.textPrimary,
          padding: 10,
        }}
      >
        <UiView
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            justifyContent: "center",
          }}
        >
          <UiText numberOfLines={1} variant="titleMedium">{name}</UiText>

          <UiText>{items} Items</UiText>
        </UiView>
      </UiView>
    </TouchableOpacity>
  );
}

export default CategoryCard;
