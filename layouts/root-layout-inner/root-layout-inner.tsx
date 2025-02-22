import { DarkTheme, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, useRootNavigationState, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useContext, useEffect } from "react";
import "react-native-reanimated";
import { useAppState } from "@/providers";


export default function RootLayoutInner() {
  const { hasOnboarded } = useAppState();
  const router = useRouter();
  const navigationState = useRootNavigationState();

  const [loaded] = useFonts({
    SpaceMono: require("../../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    // if (!hasOnboarded && navigationState?.key) {
    //   router.replace("/onboarding");
    // }

    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded, navigationState?.key]);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <Stack >
        <Stack.Screen  name="(onboarding)/index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}
