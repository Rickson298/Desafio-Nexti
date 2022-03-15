import { useEffect, useState } from "react";
import { initialTheme, ThemeContext } from "./ThemeContext";

export const ThemeValue: React.FC = ({ children }) => {
  const storage = localStorage.getItem("theme");
  const [theme, setTheme] = useState(() => {
    if (storage) {
      return JSON.parse(storage);
    } else {
      return initialTheme.theme;
    }
  });

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
