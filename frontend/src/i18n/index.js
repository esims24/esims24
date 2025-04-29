import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './en';
import mmTranslation from './mm';

// Initialize i18next
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation
      },
      mm: {
        translation: mmTranslation
      }
    },
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // React already escapes by default
    }
  });

export default i18n;