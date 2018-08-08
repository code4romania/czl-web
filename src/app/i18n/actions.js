import i18nInstance from './i18n';

export const setLocale = locale => dispatch => {
  dispatch({
    type: 'SET_LOCALE',
    locale
  });

  i18nInstance.changeLanguage(locale);
};
