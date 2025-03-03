import { UiText, UiView } from "@/components";
import { Image, TouchableOpacity } from "react-native";
import GreenDot from "@/assets/images/green-dot.png";
import YellowDot from "@/assets/images/yellow-dot.png";
import { useRouter } from "expo-router";
import { MenufyTheme, useTheme } from "react-native-paper";

function MenuCard({ id, name, items, categories }: Menu) {
  const router = useRouter();
  const { colors } = useTheme<MenufyTheme>();

  return (
    <TouchableOpacity
      onPress={() => {
        router.push(`/(tabs)/(restaurant)/${id}/${id}`);
      }}
      style={{ marginTop: 10 }}
    >
      <UiView
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
          backgroundColor: colors.textFieldPrimary,
          borderBottomWidth: 1,
          borderBottomColor: colors.textPrimary,
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
          <UiText variant="titleMedium">{name}</UiText>

          <UiView
            customStyle={{
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
            }}
          >
            <UiView
              customStyle={{
                display: "flex",
                flexDirection: "row",
                gap: 5,
                alignItems: "center",
              }}
            >
              <Image style={{ height: 5, width: 5 }} source={YellowDot} />
              <UiText>{categories} Categories</UiText>
            </UiView>
            <UiView
              customStyle={{
                display: "flex",
                flexDirection: "row",
                gap: 5,
                alignItems: "center",
              }}
            >
              <Image style={{ height: 5, width: 5 }} source={GreenDot} />
              <UiText>{items} Items</UiText>
            </UiView>
          </UiView>
        </UiView>
      </UiView>
    </TouchableOpacity>
  );
}

export default MenuCard;
