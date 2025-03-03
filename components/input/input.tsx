import { StyleProp, StyleSheet, TextStyle } from "react-native";
import {
  MenufyTheme,
  TextInput,
  TextInputProps,
  useTheme,
} from "react-native-paper";

export interface InputProps extends TextInputProps {
  customStyle?: StyleProp<TextStyle>;
}

function UiInput({ customStyle, ...props }: InputProps) {
  const { colors } = useTheme<MenufyTheme>();

  return (
    <TextInput
      theme={{
        colors: {
          primary: colors.textPrimary,
        },
      }}
      mode="outlined"
      outlineStyle={{ borderRadius: 30, borderWidth: 1 }}
      style={StyleSheet.flatten([
        {
          marginBottom: 10,
          color: colors.textPrimary,
          backgroundColor: colors.textFieldPrimary,
        },
        customStyle
      ])}
      {...props}
    />
  );
}

export default UiInput;
