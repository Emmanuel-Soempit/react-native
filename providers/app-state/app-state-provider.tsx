import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

export interface AppStateProps {
  hasOnboarded: boolean;
  setHasOnboarded: Dispatch<SetStateAction<boolean>> | null;
}

const AppStateContext = createContext<AppStateProps>({
  hasOnboarded: false,
  setHasOnboarded: null,
});

export function AppStateContextProvider({ children }: { children: ReactNode }) {
  const [hasOnboarded, setHasOnboarded] = useState(false);

  return (
    <AppStateContext.Provider value={{ hasOnboarded, setHasOnboarded }}>
      {children}
    </AppStateContext.Provider>
  );
}


export const useAppState = () => useContext(AppStateContext)
