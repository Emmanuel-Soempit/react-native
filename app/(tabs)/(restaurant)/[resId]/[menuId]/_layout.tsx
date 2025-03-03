import { Stack,} from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import Toast from "react-native-toast-message";


export default function RestaurantLayout() {
 
  return (
    <>
      <Stack >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="add-item" options={{ headerShown: false }} />
        <Stack.Screen name="[categoryId]" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
      <Toast/>
    </>
  );
}
