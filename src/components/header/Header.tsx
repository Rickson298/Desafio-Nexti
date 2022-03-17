import React from "react";
import { useTranslation } from "react-i18next";
import { FiMenu } from "react-icons/fi";
import { languages } from "../../constants/languages";
import { useAuth } from "../../hooks/useAuth";
import { useTheme } from "../../hooks/useTheme";
import { dark } from "../../styles/themes/dark";
import { light } from "../../styles/themes/light";
import { Modal } from "../modal/Modal";
import { Option } from "../option/Option";
import { SelectOption } from "../selectOption/SelectOption";
import * as C from "./styles";

interface Props {
  onClickMenuIcon?: () => void;
}

const Header: React.FC<Props> = ({ onClickMenuIcon }) => {
  const { isAuth, setIsAuth } = useAuth();
  const { i18n, t } = useTranslation();
  const { theme, setTheme } = useTheme();

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("user");
  };

  return (
    <C.Container>
      {isAuth && <FiMenu onClick={onClickMenuIcon} className="menu-icon" />}
      <span className="config">{t("settings")}</span>
      <Modal data-cy="modal">
        <SelectOption
          data-cy="select-languages"
          quantityOptions={3}
          title={t("languages")}
        >
          {languages.map((language) => (
            <Option
              data-cy={language.value}
              optionSelected={language.value === i18n.language}
              onClick={() => i18n.changeLanguage(language.value)}
            >
              {language.name}
            </Option>
          ))}
        </SelectOption>
        <SelectOption
          data-cy="select-theme"
          quantityOptions={2}
          title={t("theme")}
        >
          <Option
            data-cy="dark"
            onClick={() => setTheme(dark)}
            optionSelected={theme.title === "dark"}
          >
            {t("dark")}
          </Option>
          <Option
            data-cy="light"
            onClick={() => setTheme(light)}
            optionSelected={theme.title === "light"}
          >
            {t("light")}
          </Option>
        </SelectOption>
        {isAuth && <Option onClick={logout}>Logout</Option>}
      </Modal>
    </C.Container>
  );
};

export default Header;
