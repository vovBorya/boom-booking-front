import I18n from "i18n-js";

import en from "./languages/en";
import ru from "./languages/ru";

I18n.fallbacks = true;
I18n.missingBehaviour = 'guess';
I18n.defaultLocale = 'en';
I18n.locale = 'ru';
I18n.translations = {
  en,
  ru
};

export const setLocale = (locale) => {
  I18n.locale = locale
}

export const getCurrentLocale = () => I18n.locale;

export default I18n.translate.bind(I18n);