import { useAuth } from "../utils/useAuth";
import { Navigate } from "react-router-dom";

interface Props {
  children: JSX.Element;
}

export const PrivateRoute = ({ children }: Props) => {
  const { isAuth } = useAuth();
  if (!isAuth) {
    return <Navigate to="/" />;
  }
  return children;
};
