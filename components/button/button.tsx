import { ComponentProps, ReactNode } from "react";
import { StyleSheet } from "react-native";
import {
  Button,
  MenufyTheme,
  Text,
  useTheme,
} from "react-native-paper";

export interface ButtonProps extends ComponentProps<typeof Button> {
  children: ReactNode;
  variant?: "primary" | "outline";
  onPress: () => void,
}

function MainButton({ children, variant = 'primary', onPress, ...props }: ButtonProps) {
  const { colors } = useTheme<MenufyTheme>();

  const primaryStyle = StyleSheet.create({
    main: {
      backgroundColor: colors.buttonPrimary,
    },
    text: {
      color: colors.buttonTextPrimary,
    },
  });

  const outlineStyle = StyleSheet.create({
    main: {
      borderWidth: 1,
      borderColor: 'white',
    },
    text: {
      color: colors.buttonTextPrimary,
    },
  });


  const style = variant === 'primary' ? primaryStyle : outlineStyle

  return (
    <Button onPress={onPress} style={{...style.main, padding: 4}} {...props}>
      <Text style={style.text}>{children}</Text>
    </Button>
  );
}

export default MainButton;
