import { ComponentProps } from "react";
import { StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { MenufyTheme, TextInput, useTheme } from "react-native-paper";

export interface InputProps extends ComponentProps<typeof TextInput> {}

function MainInput({ ...props }: InputProps) {
  const { colors } = useTheme<MenufyTheme>();

  const primaryStyle = StyleSheet.create({});

  return (
      <TextInput
        mode="outlined"
        outlineStyle={{ borderRadius: 30, borderWidth: 0 }}
        style={{ backgroundColor: colors.textFieldPrimary }}
        {...props}
      />
  );
}

export default MainInput;
