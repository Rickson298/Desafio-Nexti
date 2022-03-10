import { useState } from "react";
import { AuthContext, initialValueAuth } from "./AuthContext";

export const AuthProvider: React.FC = ({ children }) => {
  const [isAuth, setIsAuth] = useState(initialValueAuth.isAuth);
  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
