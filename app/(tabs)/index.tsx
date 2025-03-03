import { StyleSheet, Image, useColorScheme, FlatList } from "react-native";
import {
  UiActionCard,
  UiPlaceholder,
  UiScreenWrap,
  UiText,
  UiView,
} from "@/components";
import CalenderLight from "../../assets/images/calender-light.png";
import CalenderDark from "../../assets/images/calender-dark.png";
import { dashboardSummaryData } from "@/utils/dummies";
import { SummaryCard } from "@/features/dashboard";
import { getAction } from "@/constants/action-options";
import { getPlaceholder } from "@/constants/placholders";
import { useState } from "react";

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const [noNetwork, setNoNetwork] = useState(true);

  const toogleNoNetwork = () => setNoNetwork(!noNetwork);

  return (
    <UiScreenWrap type="home" customStyle={{ gap: 10 }}>
      {noNetwork ? (
        <UiPlaceholder height={'90%'} onPress={toogleNoNetwork} {...getPlaceholder("no-network")!} />
      ) : (
        <>
          <UiView
            customStyle={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-end",
              gap: 5,
            }}
          >
            <Image
              style={{ width: 20, height: 20, objectFit: "contain" }}
              source={colorScheme === "dark" ? CalenderDark : CalenderLight}
            />
            <UiText>{new Date().toDateString()}</UiText>
          </UiView>

          <UiView customStyle={{ gap: 10, marginTop: "5%" }}>
            <UiText variant="headlineLarge">Summary</UiText>
            <FlatList
              data={dashboardSummaryData}
              numColumns={4} // Set the number of columns
              keyExtractor={(_, index) => index.toString()}
              renderItem={({ item }) => <SummaryCard {...item} />}
              columnWrapperStyle={styles.cardContaner}
            />

            <FlatList
              data={[getAction("new restaurant"), getAction("analytics")]}
              numColumns={4} // Set the number of columns
              keyExtractor={(_, index) => index.toString()}
              renderItem={({ item }) => <UiActionCard onPress={toogleNoNetwork} {...item!} />}
              columnWrapperStyle={styles.actionContaner}
            />
          </UiView>
        </>
      )}
    </UiScreenWrap>
  );
}

const styles = StyleSheet.create({
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  cardContaner: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  actionContaner: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: "5%",
    marginTop: "10%",
  },
});
