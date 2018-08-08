import i18next from 'i18next';

import ro from './translations/ro.json';
import en from './translations/en.json';

i18next.init({
  interpolation: {
    // React already does escaping
    escapeValue: false
  },
  lng: 'ro',
  resources: {
    ro,
    en
  }
});

export default i18next;
