import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ptBR from "./translations/ptBR.json";
import enUS from "./translations/enUS.json";
import es from "./translations/es.json";

i18n.use(initReactI18next).init({
  fallbackLng: "ptBR",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    enUS,
    ptBR,
    es,
  },
});

export default i18n;
