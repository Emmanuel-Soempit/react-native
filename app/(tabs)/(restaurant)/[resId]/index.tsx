import {
    UiActionCard,
    UiPlaceholder,
    UiScreenWrap,
    UiSearchBar,
    UiText,
    UiVerticalList,
    UiView,
  } from "@/components";
  import { getAction } from "@/constants/action-options";
  import { getPlaceholder } from "@/constants/placholders";
  import { dummyMenus, restaurants } from "@/utils/dummies";
  import { useState } from "react";
  import { FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";
  import Waiters from "@/assets/images/waiters.png";
  import LocationIcon from "@/assets/images/location-icon.png";
  import { Icon } from "react-native-paper";
  import { useRouter } from "expo-router";
  import { AddMenuModal, MenuCard } from "@/features/menu";
  
  function SingleRestaurant() {
  
    const [noRestaurants, setNoRestaurants] = useState(true);
    const toogleNoRestaurants = () => setNoRestaurants(!noRestaurants);
  
    const [addMenu, setAddMenu] = useState(false);
    const toogleAddMenu = () => setAddMenu(!addMenu);
  
    const { name,  address } = restaurants[0];
  
    const router = useRouter();
  
  
    return (
      <UiScreenWrap
        containerCustomStyle={{ paddingHorizontal: 0 }}
        showHeader={false}
      >
  
         <AddMenuModal visible={addMenu} onDismiss={toogleAddMenu} />
  
          <Image source={Waiters} style={{ width: "100%", height: "20%" }} />
  
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
            }}
          >
            <UiText variant="titleLarge">{name}</UiText>
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
  
          <TouchableOpacity onPress={() => router.push("./add-restaurant")}>
            <Icon source={"pen"} size={20} />
          </TouchableOpacity>
        </UiView>
  
        <UiView>
          <FlatList
            data={[getAction("new menu")]}
            numColumns={4} // Set the number of columns
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => (
              <UiActionCard onPress={toogleAddMenu} {...item!} />
            )}
            columnWrapperStyle={styles.actionContaner}
          />
        </UiView>
        <UiView
          customStyle={{
            paddingHorizontal: "4%",
          }}
        >
          <UiSearchBar
            placeholder="Find menu"
            list={[]}
            onSearch={(result) => {
              toogleNoRestaurants();
            }}
          />
        </UiView>
  
        {noRestaurants ? (
          <UiPlaceholder
            onPress={toogleNoRestaurants}
            height={"50%"}
            {...getPlaceholder("add-restaurant")!}
          />
        ) : (
          <>
            <UiView
              customStyle={{
                height: "44%",
                paddingHorizontal: "5%",
              }}
            >
              <UiVerticalList
                data={dummyMenus}
                renderItem={(item) => <MenuCard {...item} />}
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
      marginVertical: "3%",
      paddingHorizontal: "5%",
    },
  });
  
  export default SingleRestaurant;
  