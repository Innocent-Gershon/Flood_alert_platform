import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();

  const switchLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div>
      <h1>{t('title')}</h1>
      <button onClick={() => switchLanguage('en')}>English</button>
      <button onClick={() => switchLanguage('twi')}>Twi</button>
      <form>
        <label>{t('location')}</label>
        <input type="text" />

        <label>{t('severity')}</label>
        <input type="text" />

        <label>{t('message')}</label>
        <textarea />

        <button type="submit">{t('submit')}</button>
      </form>
    </div>
  );
}

export default App;
