import { UiText, UiView } from "@/components";
import { Image, TouchableOpacity } from "react-native";
import { Restaurant } from "../types";
import ResImage from "@/assets/images/res-image.png";
import LocationIcon from "@/assets/images/location-icon.png";
import { useRouter } from "expo-router";

function RestaurantCard({id, name, image, address }: Restaurant) {
  const router = useRouter()

  return (
    <TouchableOpacity onPress={() => {
      router.push(`/(tabs)/(restaurant)/${id}`)
    }} style={{marginTop: 10}}>
      <UiView style={{ display: "flex", flexDirection: "row", gap: 10 }}>
        <Image style={{ height: 70, width: 70 }} source={ResImage} />

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
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 5,
              alignItems: "center",
            }}
          >
            <Image style={{ height: 20, width: 20 }} source={LocationIcon} />
            <UiText>{address}</UiText>
          </UiView>
        </UiView>
      </UiView>
    </TouchableOpacity>
  );
}

export default RestaurantCard;
