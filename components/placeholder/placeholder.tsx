import {  DimensionValue, Image, TouchableOpacity } from "react-native";
import UiText from "../text/text";
import UiView from "../view/view";
import {  PlaceholderOption } from "@/types";



interface UiPlaceholderProps extends PlaceholderOption {
  onPress?: () => void,
  height?: DimensionValue
}

function UiPlaceholder({  image, onPress, label, height }: UiPlaceholderProps) {

  const _handleOnPress = () => {
      if(onPress){
        onPress()
      }
  }
  return (
    <TouchableOpacity
      onPress={_handleOnPress}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height
      }}
    >
      <UiView customStyle={{height: 'auto', backgroundColor: 'white'}}>
      <Image style={{ height: 100, width: 100 }} source={image} />
      {label && <UiText>{label}</UiText>}
      </UiView>
    </TouchableOpacity>
  );
}

export default UiPlaceholder;
