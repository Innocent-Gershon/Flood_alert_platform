import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      title: "Flood Alert Dashboard",
      sendAlert: "Send Alert",
      location: "Location",
      severity: "Severity",
      message: "Message",
      submit: "Submit",
    }
  },
  twi: {
    translation: {
      title: "Nsuo Bɔ Ho Dwumadie",
      sendAlert: "Fa nsɛm no to hɔ",
      location: "Beaeɛ",
      severity: "Hyeɛ",
      message: "Nsɛm",
      submit: "Tɔ nsɛm no",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: { escapeValue: false }
  });

export default i18n;
