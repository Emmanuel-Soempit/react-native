import { useEffect, useState } from "react";
import UiView from "../view/view";
import {  TouchableOpacity } from "react-native";
import UiInput from "../input/input";
import { Icon, MenufyTheme, useTheme } from "react-native-paper";

interface UiSearchBarProps {
  list: any[];
  onSearch: (result: any[]) => void;
  placeholder: string;
}

function UiSearchBar({ list, onSearch, placeholder }: UiSearchBarProps) {
  const { colors } = useTheme<MenufyTheme>();
  const [searchText, setSearchText] = useState("");

  const _handleSearch = () => {
    if (searchText) {
       list.filter((item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase)
      );
    }
    onSearch([]);
  };


  useEffect(() => {
      _handleSearch();
  }, [])

  return (
    <UiView
      customStyle={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        gap: 10,
      }}
    >
      <UiInput
        customStyle={{ width: "85%" , height: 40}}
        placeholder={placeholder}
        value={searchText}
        onChange={(e) => setSearchText(e.nativeEvent.text)}
      />

      <TouchableOpacity
        style={{
          backgroundColor: colors.textFieldPrimary,
          borderRadius: "100%",
          width: 40,
          height: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: 'center'
        }}
        onPress={() => _handleSearch()}
      >
        <Icon source="magnify" size={25} />
      </TouchableOpacity>
    </UiView>
  );
}

export default UiSearchBar;
