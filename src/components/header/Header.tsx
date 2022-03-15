import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { FiMenu } from "react-icons/fi";
import { MdOutlineLanguage } from "react-icons/md";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { languages } from "../../constants/languages";
import { useAuth } from "../../hooks/useAuth";
import { useTheme } from "../../hooks/useTheme";
import { dark } from "../../styles/themes/dark";
import { light } from "../../styles/themes/light";
import * as C from "./styles";

interface Props {
  onClickMenuIcon?: () => void;
}

const Header: React.FC<Props> = ({ onClickMenuIcon }) => {
  const { colors, title } = useContext(ThemeContext);
  const { isAuth, setIsAuth } = useAuth();
  const { i18n, t } = useTranslation();
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    theme.title === "dark" ? setTheme(light) : setTheme(dark);
  };

  return (
    <C.Container>
      {isAuth && (
        <>
          <FiMenu onClick={onClickMenuIcon} className="menu-icon" />

          <C.OptionWithModal>
            <span>{t("settings")}</span>
            <C.OptionsModal>
              <button
                onClick={() => {
                  setIsAuth(false);
                  localStorage.removeItem("user");
                }}
              >
                Logout
              </button>
            </C.OptionsModal>
          </C.OptionWithModal>
        </>
      )}
      <Switch
        onChange={changeTheme}
        checked={title === "dark"}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={colors.backgroundPrimary}
        onColor={colors.backgroundPrimary}
      />
      <C.OptionWithModal>
        <MdOutlineLanguage className="icon" size={32} />
        <C.OptionsModal>
          {languages.map((language) => (
            <button
              style={{
                fontWeight: language.value === i18n.language ? "600" : "normal",
                fontSize: language.value === i18n.language ? "18px" : "16px",
              }}
              onClick={() => i18n.changeLanguage(language.value)}
            >
              {language.name}
            </button>
          ))}
        </C.OptionsModal>
      </C.OptionWithModal>
    </C.Container>
  );
};

export default Header;
