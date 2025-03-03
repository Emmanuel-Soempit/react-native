import {
  UiScreenWrap,
  UiText,
  UiView,
} from "@/components";
import {
  categories,
  dummyMenuItems,
} from "@/utils/dummies";
import { useState } from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "react-native-paper";
import { useRouter } from "expo-router";
import MenuItem from "@/assets/images/menu-item.png";
import { AddMenuModal} from "@/features/menu";

function SingleMenuItem() {

  const [addMenu, setAddMenu] = useState(false);
  const toogleAddMenu = () => setAddMenu(!addMenu);

  const { name, description, price } = dummyMenuItems[0];


  const router = useRouter();


  return (
    <UiScreenWrap
      containerCustomStyle={{ paddingHorizontal: 0 }}
      showHeader={false}
    >
      <AddMenuModal visible={addMenu} onDismiss={toogleAddMenu} />

        <Image source={MenuItem} style={{ width: "100%", height: "50%" }} />

      <UiView
        customStyle={{
          paddingHorizontal: "5%",
          marginTop: 10,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <UiView
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            justifyContent: "center",
            width: "70%",
          }}
        >
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

          <UiText variant="titleLarge">{name}</UiText>

          <UiText variant="bodyLarge" customStyle={{ width: "100%" }}>
            {description}
          </UiText>
          <UiText variant='headlineMedium' customStyle={{ width: "100%" }}>
            N{price * 1000}
          </UiText>
        </UiView>

        <TouchableOpacity onPress={() => router.push("../../add-item")}>
          <Icon source={"pen"} size={20} />
        </TouchableOpacity>
      </UiView>
    </UiScreenWrap>
  );
}



export default SingleMenuItem;
