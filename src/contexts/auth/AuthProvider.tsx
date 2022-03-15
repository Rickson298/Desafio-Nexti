import { useState } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider: React.FC = ({ children }) => {
  let storage = localStorage.getItem("user");
  const [isAuth, setIsAuth] = useState(storage ? true : false);
  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
