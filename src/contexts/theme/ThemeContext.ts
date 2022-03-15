import { createContext } from "react";
import { DefaultTheme } from "styled-components";
import { dark } from "../../styles/themes/dark";

export const initialTheme = {
  theme: dark,
  setTheme: () => {},
};

interface ContextType {
  theme: DefaultTheme;
  setTheme: (newState: DefaultTheme) => void;
}

export const ThemeContext = createContext<ContextType>(initialTheme);
