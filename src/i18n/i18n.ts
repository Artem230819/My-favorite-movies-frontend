import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationsEn from "./en.json";
import translationsRu from "./ru.json";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: { translation: translationsEn },
      ru: { translation: translationsRu },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });
export default i18n;
