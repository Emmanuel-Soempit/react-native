import { ComponentProps, ReactNode } from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { MenufyTheme, useTheme } from "react-native-paper";


export interface MainViewProps extends ComponentProps<typeof View>{
    children?: ReactNode,
    variant?: 'primary' | 'secondary' | 'basic',
    customStyle?: StyleProp<ViewStyle>
}

function UiView({children, variant='basic', customStyle, ...props}: MainViewProps) {

    const {colors} = useTheme<MenufyTheme>()

      const primaryStyle = StyleSheet.create({
        main: {
            backgroundColor: colors.primary
        },
      });
    
      const secondaryStyle = StyleSheet.create({
        main: {
          backgroundColor: colors.secondary
        },
      });

      const basicStyle = StyleSheet.create({
        main: {
          padding: 2
        },
      });
    
    
      const baseStyle = variant === 'primary' ? primaryStyle : variant === 'secondary' ? secondaryStyle : basicStyle
      
    return ( <View style={StyleSheet.flatten([baseStyle.main, customStyle])} {...props}>{children}</View> );
}

export default UiView;