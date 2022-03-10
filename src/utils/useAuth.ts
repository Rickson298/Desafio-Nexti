import { useContext } from "react";
import { AuthContext } from "../contexts/auth/AuthContext";

export const useAuth = () => {
  const authContext = useContext(AuthContext);
  return authContext;
};
