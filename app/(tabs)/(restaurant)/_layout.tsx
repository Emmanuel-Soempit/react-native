import { Stack,} from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import Toast from "react-native-toast-message";


export default function RestaurantLayout() {
 
  return (
    <>
      <Stack >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="add-restaurant" options={{ headerShown: false }} />
        <Stack.Screen name="[resId]" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
      <Toast/>
    </>
  );
}
