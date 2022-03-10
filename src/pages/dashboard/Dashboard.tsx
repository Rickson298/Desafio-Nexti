import { useAuth } from "../../utils/useAuth";

export const Dashboard = () => {
  const { isAuth, setIsAuth } = useAuth();
  return (
    <>
      <button onClick={() => setIsAuth(false)}>Logout</button>
      <h1>Você está logado</h1>
    </>
  );
};
