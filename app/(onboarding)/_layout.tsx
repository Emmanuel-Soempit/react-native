
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";


export default function RootLayoutInner() {

  return (
    <>
      <Stack>
        <Stack.Screen  name="index" options={{ headerShown: false }} />
        <Stack.Screen name="sign-up-options" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}
