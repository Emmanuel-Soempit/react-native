import { NavigationOption } from "@/types";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface NavigationContextProps {
  activeOption: NavigationOption | null;
  setActiveOption: Dispatch<SetStateAction<NavigationOption | null>> | null;
}

const NavigationContext = createContext<NavigationContextProps>({
  activeOption: null,
  setActiveOption: null,
});

export function NavigationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeOption, setActiveOption] = useState<NavigationOption | null>(
    null
  );

  return (
    <NavigationContext.Provider value={{ activeOption, setActiveOption }}>
      {children}
    </NavigationContext.Provider>
  );
}

export const useNavigationContext = () => useContext(NavigationContext);
