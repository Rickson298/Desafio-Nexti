import React from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useAuth } from "./hooks/useAuth";
import { useTheme } from "./hooks/useTheme";
import { MessagesList } from "./pages/MessagesList/MessagesList";
import { Login } from "./pages/login/Login";
import { PrivateRoute } from "./pages/PrivateRoute";

function App() {
  const { theme } = useTheme();
  const { isAuth } = useAuth();

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={isAuth ? <MessagesList /> : <Login />} />
        <Route
          path="/list-tasks"
          element={
            <PrivateRoute>
              <MessagesList />
            </PrivateRoute>
          }
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
