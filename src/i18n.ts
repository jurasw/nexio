import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en.json";
import pl from "./locales/pl.json";

i18next
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: en,
      },
      pl: {
        translation: pl,
      },
    },
  });

export default i18next;
