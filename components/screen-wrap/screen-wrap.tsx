import { NavigationType } from "@/types";
import UiView from "../view/view";
import { SafeAreaView } from "react-native-safe-area-context";
import { Appbar, MenufyTheme, useTheme } from "react-native-paper";
import { useRouter } from "expo-router";
import { ReactNode, useEffect } from "react";
import { Dimensions, StyleProp, StyleSheet, ViewStyle } from "react-native";
import { useNavigationContext } from "@/providers";
import { navigationOptions } from "@/constants/navigation-options";

interface UiScreenWrapProps {
  showHeader?: boolean;
  showBackButton?: boolean;
  type?: NavigationType;
  children?: ReactNode;
  customStyle?: StyleProp<ViewStyle>;
  containerCustomStyle?: StyleProp<ViewStyle>;
}

function UiScreenWrap({
  showHeader = true,
  showBackButton = false,
  type,
  children,
  customStyle,
  containerCustomStyle = style.contaner,
}: UiScreenWrapProps) {
  const router = useRouter();
  const { colors } = useTheme<MenufyTheme>();
  const { activeOption, setActiveOption } = useNavigationContext();

  useEffect(() => {
    if (type) {
      const option =
        navigationOptions.find((current) => current.type === type) || null;
      setActiveOption!(option);
    }
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: colors.primary, flex: 1 }}>
      <UiView style={StyleSheet.flatten([style.body, customStyle])}>
        {showHeader && (
          <Appbar.Header
            statusBarHeight={20}
            style={{
              backgroundColor: colors.primary,
              paddingHorizontal: '4%'
            }}
          >
            {showBackButton ? (
              <Appbar.BackAction
                iconColor={colors.textPrimary}
                style={{
                  borderWidth: 1,
                  borderColor: colors.border,
                  borderRadius: 20,
                  width: "25%",
                }}
                onPress={() => router.back()}
              />
            ) : (
              <>
                <Appbar.Content
                  color={colors.textPrimary}
                  title={activeOption?.title}
                  style={style.appBarContent}
                  titleStyle={{ fontSize: 30 }}
                />
                <Appbar.Action
                  icon="bell-outline"
                  onPress={() => console.log("Search pressed")}
                />
              </>
            )}
          </Appbar.Header>
        )}

        <UiView style={StyleSheet.flatten([containerCustomStyle])}>
          {children}
        </UiView>
      </UiView>
    </SafeAreaView>
  );
}

const { height} = Dimensions.get("window");
const style = StyleSheet.create({
  appBarContent: {
    // backgroundColor: '#34df44',
    // height: 'auto'
    alignItems: "flex-start",
    fontSize: 30,
  },
  body: {
    // backgroundColor: '#34df44',
    flex: 1,
    maxHeight: 0.9 * height,
    display: "flex",
    flexDirection: "column",
  },
  contaner: { paddingLeft: "4%", paddingRight: "4%", width: "100%" },
});

export default UiScreenWrap;
