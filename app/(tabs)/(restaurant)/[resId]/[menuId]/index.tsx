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
import { dummyCategories, dummyMenus} from "@/utils/dummies";
import { useState } from "react";
import { FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "react-native-paper";
import { useRouter } from "expo-router";
import { AddCategoryModal, AddMenuModal, CategoryCard} from "@/features/menu";
import GreenDot from "@/assets/images/green-dot.png";
import YellowDot from "@/assets/images/yellow-dot.png";

function SingleMenu() {
  const [noMenuItems, setNoMenuItems] = useState(true);
  const toogleNoMenuItems = () => setNoMenuItems(!noMenuItems);

  const [addCategory, setAddCategory] = useState(false);
  const toogleAddCategory = () => setAddCategory(!addCategory);

  const [updateMenu, setUpdateMenu] = useState(false);
  const toogleUpdateMenu = () => setUpdateMenu(!updateMenu);

  const { name, items, categories } = dummyMenus[0];

  const router = useRouter();


  return (
    <UiScreenWrap
      containerCustomStyle={{ paddingHorizontal: 0 }}
      showHeader={true}
      showBackButton={true}
    >
      <AddCategoryModal visible={addCategory} onDismiss={toogleAddCategory} />
      <AddMenuModal visible={updateMenu} onDismiss={toogleUpdateMenu}/>

      <UiView
        customStyle={{
          paddingHorizontal: "5%",
          marginVertical: 10,
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

        <TouchableOpacity onPress={toogleUpdateMenu}>
          <Icon source={"pen"} size={20} />
        </TouchableOpacity>
      </UiView>

      <UiView>
        <FlatList
          data={[getAction("new category"), getAction("new item")]}
          numColumns={4} // Set the number of columns
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => {
            const handleOnPress = () => {
              if (item?.type === "new category") {
                toogleAddCategory();
              } else if (item?.type === "new item") {
                router.push("./add-item");
              }
            };
            return <UiActionCard onPress={handleOnPress} {...item!} />;
          }}
          columnWrapperStyle={styles.actionContaner}
        />
      </UiView>
      <UiView
        customStyle={{
          paddingHorizontal: "4%",
        }}
      >
        <UiText variant="titleLarge">Categories</UiText>
        <UiSearchBar
          placeholder="Find category"
        
          list={[]}
          onSearch={(result) => {
            toogleNoMenuItems();
          }}
        />
      </UiView>

      {noMenuItems ? (
        <UiPlaceholder
          onPress={toogleNoMenuItems}
          height={"50%"}
          {...getPlaceholder("add-menu-item")!}
        />
      ) : (
        <>
          <UiView
            customStyle={{
              height: "54%",
              paddingHorizontal: "5%",
            }}
          >
            <UiVerticalList
              data={dummyCategories}
              numberOfCols={3}
              renderItem={(item) => <CategoryCard {...item} />}
              columnWrapperStyle={{ gap: "3%" }}
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

export default SingleMenu;
