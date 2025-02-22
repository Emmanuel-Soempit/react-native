import "react-native-reanimated";
import ThemeProvider, {
  AppStateContextProvider,
} from "@/providers";
import RootLayoutInner from "@/layouts/root-layout-inner/root-layout-inner";

export const unstable_settings = {
  initialRouteName: '(onboarding)/index',
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <AppStateContextProvider>
          <RootLayoutInner />
      </AppStateContextProvider>
    </ThemeProvider>
  );
}
