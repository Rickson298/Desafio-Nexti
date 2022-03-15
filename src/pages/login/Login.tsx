import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import Header from "../../components/header/Header";
import { Input } from "../../components/input/Input";
import { useAuth } from "../../hooks/useAuth";
import * as C from "./styles";

export const Login = () => {
  const { setIsAuth } = useAuth();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser(e.target.value);
  };
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  // Aqui normalmente mandaríamos uma requisição do tipo POST para o back-end validar os dados de login e retornar um token por exemplo, caso as credenciais do usuário estejam corretas

  const isAuthenticate = user === "user" && password === "123";
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <C.Container>
        <C.BoxLogin>
          <form>
            <h1>{t("signUp")}</h1>
            <div className="inputs">
              <label htmlFor="user">{t("user")}</label>
              <Input
                data-cy="user"
                value={user}
                onChange={handleUser}
                id="user"
              />
              <label htmlFor="user">{t("password")}</label>
              <Input
                data-cy="password"
                value={password}
                onChange={handlePassword}
                type="password"
              />
            </div>
            <button
              data-cy="button-login"
              onClick={() => {
                if (isAuthenticate) {
                  localStorage.setItem("user", "user");
                  setIsAuth(true);
                  navigate("/list-tasks");
                }
              }}
            >
              LOG IN
            </button>
          </form>
          <div className="sideBar" />
        </C.BoxLogin>
      </C.Container>
    </>
  );
};
