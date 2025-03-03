import { ComponentProps } from "react";
import { Divider } from "react-native-paper";
import UiView from "../view/view";
import UiText from "../text/text";
import { StyleSheet } from "react-native";

interface DividerProps extends ComponentProps<typeof Divider> {
  text?: string;
}

function UiDivider({ text }: DividerProps) {
  return (
    <>
      {text ? (
        <UiView
          customStyle={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            gap: 5,
            justifyContent: "space-between",
            alignItems: 'center'
          }}
        >
          <Divider style={StyleSheet.flatten([{height: 1, width: '45%'}])} />
          <UiText>{text}</UiText>
          <Divider style={StyleSheet.flatten([{height: 1, width: '45%'}])} />
        </UiView>
      ) : (
        <Divider style={StyleSheet.flatten([{height: 1, width: '100%'}])}/>
      )}
    </>
  );
}

export default UiDivider;
