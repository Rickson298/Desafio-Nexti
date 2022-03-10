import React, { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { useAuth } from "../../utils/useAuth";
import { MdOutlineLanguage } from "react-icons/md";
import { useTranslation } from "react-i18next";
import * as C from "./styles";
import { languages } from "../../constants/languages";

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);
  const { isAuth, setIsAuth } = useAuth();
  const { i18n } = useTranslation();

  return (
    <C.Container>
      <Switch
        onChange={toggleTheme}
        checked={title === "dark"}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={colors.backgroundPrimary}
        onColor={colors.backgroundPrimary}
      />
      {isAuth && (
        <C.Options>
          <span className="configuracoes">Configurações</span>
          <C.OptionsModal>
            <button onClick={() => setIsAuth(false)}>Logout</button>
          </C.OptionsModal>
        </C.Options>
      )}
      <C.Options>
        <MdOutlineLanguage
          color={colors.backgroundPrimary}
          className="icon"
          size={32}
        />
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
      </C.Options>
    </C.Container>
  );
};

export default Header;
