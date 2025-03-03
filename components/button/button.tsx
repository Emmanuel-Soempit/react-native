import { ComponentProps, ReactNode } from "react";
import { StyleSheet } from "react-native";
import { Button, MenufyTheme, Text, useTheme } from "react-native-paper";

export interface ButtonProps extends ComponentProps<typeof Button> {
  children: ReactNode;
  variant?: "primary" | "outline" | "outline-light";
  onPress: () => void;
  customStyle?: any;
}

function UiButton({
  children,
  variant = "primary",
  customStyle,
  onPress,
  ...props
}: ButtonProps) {
  const { colors } = useTheme<MenufyTheme>();

  const primaryStyle = StyleSheet.create({
    main: {
      backgroundColor: colors.buttonPrimary,
      paddingVertical: 2,
    },
    text: {
      color: colors.buttonTextPrimary,
    },
  });

  const outlineStyle = StyleSheet.create({
    main: {
      borderWidth: 1,
      borderColor: colors.textPrimary,
      paddingVertical: 2,
    },
    text: {
      color: colors.textPrimary,
    },
  });

  const outlineLightStyle = StyleSheet.create({
    main: {
      borderWidth: 1,
      borderColor: 'white',
      paddingVertical: 2,
    },
    text: {
      color: "white",
    },
  });

  const style =
    variant === "primary"
      ? primaryStyle
      : variant === "outline"
      ? outlineStyle
      : outlineLightStyle;

  return (
    <Button
      onPress={onPress}
      textColor={style.text.color}
      style={StyleSheet.flatten([style.main, customStyle])}
      {...props}
    >
      <Text style={style.text}>{children}</Text>
    </Button>
  );
}

export default UiButton;
