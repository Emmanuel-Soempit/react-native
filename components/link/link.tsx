import { ComponentProps, ReactNode } from "react";
import { StyleSheet } from "react-native";
import { Button, MenufyTheme, Text, useTheme } from "react-native-paper";

export interface ButtonProps extends ComponentProps<typeof Button> {
  children: ReactNode;
  variant?: "primary" | "outline" | "outline-light";
  onPress: () => void;
  customStyle?: any;
}

function UiLink({
  children,
  variant = "primary",
  customStyle,
  onPress,
  ...props
}: ButtonProps) {
  const { colors } = useTheme<MenufyTheme>();

  const primaryStyle = StyleSheet.create({
    main: {
      paddingVertical: 0,
      marginLeft: -10
    },
    text: {
      color: colors.textPrimary,
      fontWeight: '600'
    },
  });


  return (
    <Button
      onPress={onPress}
      textColor={primaryStyle.text.color}
      mode='text'
      style={StyleSheet.flatten([primaryStyle.main, customStyle])}
      {...props}
    >
      <Text style={primaryStyle.text}>{children}</Text>
    </Button>
  );
}

export default UiLink;
