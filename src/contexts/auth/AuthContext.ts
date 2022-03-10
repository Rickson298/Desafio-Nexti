import { createContext } from "react";

export const initialValueAuth = {
  isAuth: false,
  setIsAuth: () => {},
};

interface ContextType {
  isAuth: boolean;
  setIsAuth: (newState: boolean) => void;
}

export const AuthContext = createContext<ContextType>(initialValueAuth);
