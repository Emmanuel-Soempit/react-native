import { Image, TouchableOpacity } from "react-native";
import UiText from "../text/text";
import UiView from "../view/view";
import { ActionCardOption } from "@/types";
import { ConstantColors } from "@/constants/Colors";
import { useRouter } from "expo-router";

interface UiActionProps extends ActionCardOption {
  onPress?: () => void;
}

function UiActionCard({ type, image, title, route, onPress }: UiActionProps) {
  const router = useRouter();

  const _handleOnPress = () => {
    if (onPress) {
      onPress();
    }
    if (route) {
      router.push(route);
    }
  };

  return (
    <UiView
      customStyle={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        onPress={_handleOnPress}
        style={{
          borderRadius: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 50,
          width: 50,
          backgroundColor: ConstantColors.cardColor,
        }}
      >
        <Image style={{ height: 25, width: 25 }} source={image} />
      </TouchableOpacity>
      <UiText customStyle={{ fontWeight: 500 }}>{title}</UiText>
    </UiView>
  );
}

export default UiActionCard;
