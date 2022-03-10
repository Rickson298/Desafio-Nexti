import React from "react";
import { Route, Routes } from "react-router-dom";
import { DefaultTheme, ThemeProvider } from "styled-components";
import Header from "./components/header/Header";
import { PrivateRoute } from "./pages/PrivateRoute";
import usePersistedState from "./hooks/usePersistState";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { Login } from "./pages/login/Login";
import { dark } from "./styles/themes/dark";
import { light } from "./styles/themes/light";

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <Header toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
