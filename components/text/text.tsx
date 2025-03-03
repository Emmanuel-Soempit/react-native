import { ComponentProps, ReactNode } from "react";
import { StyleProp, StyleSheet, TextStyle} from "react-native";
import { MenufyTheme, Text, useTheme } from "react-native-paper";


export interface MainViewProps extends ComponentProps<typeof Text>{
    children: ReactNode,
    customStyle?: StyleProp<TextStyle>,
    type?: 'primary' | 'secondary'
}

function UiText({children, customStyle, type='primary', ...props}: MainViewProps) {

    const {colors} = useTheme<MenufyTheme>()

      const primaryStyle = StyleSheet.create({
        main: {
            color: colors.textPrimary,
            
        },
      });
    
      const secondaryStyle = StyleSheet.create({
        main: {
          color: colors.textSecondary
        },
      });
    
    
      const baseStyle = type === 'primary' ?  primaryStyle : secondaryStyle
      
    return ( <Text style={StyleSheet.flatten([baseStyle.main, customStyle])} {...props}>{children}</Text> );
}

export default UiText