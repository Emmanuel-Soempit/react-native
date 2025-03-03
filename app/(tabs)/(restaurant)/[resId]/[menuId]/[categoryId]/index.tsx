import {
    UiPlaceholder,
  UiScreenWrap,
  UiSearchBar,
  UiText,
  UiVerticalList,
  UiView,
} from "@/components";
import { getPlaceholder } from "@/constants/placholders";
import { dummyCategories, dummyMenuItems } from "@/utils/dummies";
import { useState } from "react";
import { Image,  TouchableOpacity } from "react-native";
import { Icon } from "react-native-paper";
import {
  AddCategoryModal,
  AddMenuModal,
} from "@/features/menu";
import GreenDot from "@/assets/images/green-dot.png";
import MenuItemCard from "@/features/menu/components/menu-item-card";

function SingleMenu() {
  const [noMenuItems, setNoMenuItems] = useState(true);
  const toogleNoMenuItems = () => setNoMenuItems(!noMenuItems);

  const [addCategory, setAddCategory] = useState(false);
  const toogleAddCategory = () => setAddCategory(!addCategory);

  const [updateMenu, setUpdateMenu] = useState(false);
  const toogleUpdateMenu = () => setUpdateMenu(!updateMenu);

  const { name, items } = dummyCategories[0];



  return (
    <UiScreenWrap
      containerCustomStyle={{ paddingHorizontal: 0 }}
      showHeader={true}
      showBackButton={true}
    >
      <AddCategoryModal visible={addCategory} onDismiss={toogleAddCategory} />
      <AddMenuModal visible={updateMenu} onDismiss={toogleUpdateMenu} />

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
                gap: 5,
                alignItems: "center",
              }}
            >
              <Image style={{ height: 5, width: 5 }} source={GreenDot} />
              <UiText>{items} Items</UiText>
            </UiView>
          </UiView>
        </UiView>

        <TouchableOpacity onPress={toogleUpdateMenu}>
          <Icon source={"pen"} size={20} />
        </TouchableOpacity>
      </UiView>

      <UiView
        customStyle={{
          paddingHorizontal: "4%",
        }}
      >
        <UiText customStyle={{marginVertical: 10}} variant="titleLarge">Menu Items</UiText>
        <UiSearchBar
          placeholder="Find menu items..."
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
              height: "64%",
              paddingHorizontal: "5%",
            }}
          >
            <UiVerticalList
              data={dummyMenuItems}
              numberOfCols={1}
              renderItem={(item) => <MenuItemCard {...item} />}
            />
          </UiView>
        </>
      )}
    </UiScreenWrap>
  );
}


export default SingleMenu;
