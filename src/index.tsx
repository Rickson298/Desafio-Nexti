import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthProvider } from "./contexts/auth/AuthProvider";
import { BrowserRouter } from "react-router-dom";
import "./i18n/index";
import { ThemeValue } from "./contexts/theme/ThemeValue";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeValue>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ThemeValue>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
