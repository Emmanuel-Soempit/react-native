import { useFonts } from "expo-font";
import { Stack, useRootNavigationState, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import {  useEffect } from "react";
import "react-native-reanimated";
import { useAppState } from "@/providers";
import Toast from "react-native-toast-message";


export default function RootLayoutInner() {
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
        <Stack.Screen name="(onboarding)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{headerShown: false}} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
      <Toast/>
    </>
  );
}
