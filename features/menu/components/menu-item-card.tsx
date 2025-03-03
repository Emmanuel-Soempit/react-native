import { UiText, UiView } from "@/components";
import { Image, TouchableOpacity } from "react-native";

import { useRouter } from "expo-router";
import { MenufyTheme, useTheme } from "react-native-paper";
import MenuItem from "@/assets/images/menu-item.png";
import { categories } from "@/utils/dummies";

function MenuItemCard({
  id,
  name,
  description,
  image,
  price,
  categoryId,
}: MenuItem) {
  const router = useRouter();
  const { colors } = useTheme<MenufyTheme>();

  return (
    <TouchableOpacity
      onPress={() => {
        router.push(`/(tabs)/(restaurant)/${id}/${id}/${id}/${id}`);
      }}
      style={{
        marginTop: 15,
        backgroundColor: colors.textFieldPrimary,
        padding: 10,
        borderRadius: 10,
      }}
    >
      <UiView style={{ display: "flex", flexDirection: "row", gap: 10 }}>
        <Image style={{ height: 70, width: 70 }} source={MenuItem} />

        <UiView
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            justifyContent: "center",
          }}
        >
          <UiView
            customStyle={{
              display: "flex",
              flexDirection: "row",
              gap: 5,
              alignItems: "center",
              justifyContent: "space-between",
              width: "85%",
            }}
          >
            <UiText variant="titleMedium">{name}</UiText>
            <UiText>N{price * 1000}</UiText>
          </UiView>
          <UiText
            type="secondary"
            customStyle={{
              backgroundColor: "#D2F4CB",
              padding: 5,
              borderRadius: 30,
              maxWidth: "20%",
            }}
          >
            {categories[0].label}
          </UiText>
        </UiView>
      </UiView>
    </TouchableOpacity>
  );
}

export default MenuItemCard;
