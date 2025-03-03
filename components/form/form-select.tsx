import React from "react";
import { Controller, ControllerProps } from "react-hook-form";
import { StyleSheet } from "react-native";
import { Icon, MenufyTheme, useTheme } from "react-native-paper";
import UiView from "../view/view";
import UiText from "../text/text";
import { Color } from "@/constants/Colors";
import DropdownSelect from "react-native-input-select";

export interface SelectProps extends Omit<ControllerProps<any>, "render"> {
  errorMessage?: string | null;
  options: { label: string; value: string }[]; // Array of select options
  placeholder?: string; // Placeholder text
}

function UiFormSelect({
  control,
  name,
  rules,
  errorMessage,
  options,
  placeholder = "Select an option",
  ...props
}: SelectProps) {
  const { colors } = useTheme<MenufyTheme>();


  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, value } }) => (
        <UiView style={style.fieldContainer}>
          <DropdownSelect
           
            placeholder={placeholder}
            placeholderStyle={{
              color: colors.textPrimary,
            }}
            dropdownIcon={
              <Icon source="menu-down" color={colors.textPrimary} size={20} />
            }
            dropdownStyle={{
              borderRadius: 30,
              height: 20,
              marginBottom: 5,
              borderWidth: 0.5,
              borderColor: colors.border,
              backgroundColor: colors.textFieldPrimary,
            }}
            options={options}
            selectedValue={value}
            onValueChange={(selectedItem: any) => {
              onChange(selectedItem.value);
            }}
            primaryColor="green"
          />
          {errorMessage && (
            <UiText customStyle={{ color: Color.dark.buttonPrimary }}>
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
  },
  pickerContainer: {
    borderRadius: 30,
    borderWidth: 1,
    padding: 0,
    borderColor: "#ccc",
    overflow: "hidden", // Ensures the border radius is applied
  },
});

export default UiFormSelect;
