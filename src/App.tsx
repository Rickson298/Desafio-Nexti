import React from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useAuth } from "./hooks/useAuth";
import { useTheme } from "./hooks/useTheme";
import { ListTasks } from "./pages/listTasks/ListTasks";
import { Login } from "./pages/login/Login";
import { PrivateRoute } from "./pages/PrivateRoute";

function App() {
  const { theme } = useTheme();
  const { isAuth } = useAuth();

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={isAuth ? <ListTasks /> : <Login />} />
        <Route
          path="/list-tasks"
          element={
            <PrivateRoute>
              <ListTasks />
            </PrivateRoute>
          }
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
