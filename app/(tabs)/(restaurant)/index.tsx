import {
  UiActionCard,
  UiPlaceholder,
  UiScreenWrap,
  UiSearchBar,
  UiVerticalList,
  UiView,
} from "@/components";
import { getAction } from "@/constants/action-options";
import { getPlaceholder } from "@/constants/placholders";
import { RestaurantCard } from "@/features/restaurant";
import { restaurants } from "@/utils/dummies";
import { useState } from "react";
import { FlatList, StyleSheet } from "react-native";

function Restaurant() {
  const [noRestaurants, setNoRestaurants] = useState(true);
  const toogleNoRestaurants = () => setNoRestaurants(!noRestaurants);

  return (
    <UiScreenWrap customStyle={{ gap: 5 }} type="restaurant">
      <UiSearchBar
        placeholder="find restaurant"
        list={[]}
        onSearch={(result) => {toogleNoRestaurants()}}
      />

      <UiView>
        <FlatList
          data={[getAction("new restaurant"), getAction("analytics")]}
          numColumns={4} // Set the number of columns
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <UiActionCard onPress={toogleNoRestaurants} {...item!} />
          )}
          columnWrapperStyle={styles.actionContaner}
        />
      </UiView>

      {noRestaurants ? (
        <UiPlaceholder
          onPress={toogleNoRestaurants}
          height={'50%'}
          {...getPlaceholder("add-restaurant")!}
        />
      ) : (
        <>
          <UiView customStyle={{ marginTop: "2%", height: "64%" }}>
            <UiVerticalList
              data={restaurants}
              renderItem={(item) => <RestaurantCard {...item} />}
            />
          </UiView>
        </>
      )}
    </UiScreenWrap>
  );
}

const styles = StyleSheet.create({
  actionContaner: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: "5%",
    marginTop: "10%",
  },
});

export default Restaurant;
