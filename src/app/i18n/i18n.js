import i18next from 'i18next';

i18next.init({
  interpolation: {
    // React already does escaping
    escapeValue: false
  },
  lng: 'ro',
  resources: {
    ro: {
      translation: {
        proposals: {
          pageTitle: 'Pagina de propuneri'
        }
      }
    },
    en: {
      translation: {
        proposals: {
          pageTitle: 'Proposals page'
        }
      }
    }
  }
});

export default i18next;
