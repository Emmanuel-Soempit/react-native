import { Controller, ControllerProps } from "react-hook-form";
import { StyleProp, StyleSheet, TextStyle } from "react-native";
import {
  MenufyTheme,
  TextInput,
  TextInputProps,
  useTheme,
} from "react-native-paper";
import UiView from "../view/view";
import UiText from "../text/text";
import { Color } from "@/constants/Colors";

export interface InputProps
  extends Omit<TextInputProps, "defaultValue">,
    Omit<ControllerProps<any>, "render"> {
  errorMessage?: string | null;
  customTextStyle?: StyleProp<TextStyle>;
}

function UiFormInput({
  control,
  name,
  rules,
  render,
  errorMessage,
  customTextStyle,
  ...props
}: InputProps) {
  const { colors } = useTheme<MenufyTheme>();


  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={() => (
        <UiView style={style.fieldContainer}>
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
                marginBottom: 5,
                color: colors.textPrimary,
                backgroundColor: colors.textFieldPrimary,
              },
              customTextStyle,
            ])}
            {...props}
          />
          {errorMessage && (
            <UiText
              customStyle={{ color: Color.dark.buttonPrimary, paddingLeft: 30 }}
            >
              {errorMessage}
            </UiText>
          )}
        </UiView>
      )}
    />
  );
}

const style = StyleSheet.create({
  fieldContainer: {
    marginBottom: 5,
    width: "100%",
  },
});

export default UiFormInput;
