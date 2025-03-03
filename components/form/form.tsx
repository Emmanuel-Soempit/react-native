import { ComponentProps, ReactNode } from "react";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import UiView from "../view/view";

export interface UiFormProps
  extends ComponentProps<typeof KeyboardAwareScrollView> {
  children: ReactNode;
  customStyle?: StyleProp<ViewStyle>
}

function UiForm({ children, customStyle, ...props }: UiFormProps) {
  return (
    <UiView style={StyleSheet.flatten([style.main, customStyle])} {...props}>{children}</UiView>
  );
}
const style = StyleSheet.create({
    main: {
        width: "100%",
        paddingVertical: 10,
        marginTop: 5,
        display: 'flex',
        flexDirection: 'column',
        gap: 5
      }
})
export default UiForm;
