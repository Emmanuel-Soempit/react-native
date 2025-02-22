import { NavigationContainer } from "@react-navigation/native";
import { useNavigationContainerRef } from "expo-router";
import { useState } from "react";
import { AppStateContextProvider } from "../app-state/app-state-provider";

export function NavigationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const navigationRef = useNavigationContainerRef();
  const [isReady, setIsReady] = useState(false);

  return (
    <NavigationContainer ref={navigationRef} onReady={() => setIsReady(true)}>
      {isReady && children}
    </NavigationContainer>
  );
}
