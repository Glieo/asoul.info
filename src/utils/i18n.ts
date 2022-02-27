import { createI18n } from "vue-i18n";

const i18n = createI18n({
  legacy: false,
  locale: navigator.language.split("-")[0],
  fallbackLocale: "zh",
  messages: { zh: {}, en: {} },
  datetimeFormats: {
    zh: {
      long: {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      },
    },
    en: {
      long: {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      },
    },
  },
});

export default i18n;
