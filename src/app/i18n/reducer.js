const i18n = (
  state = {
    locale: 'ro'
  },
  action
) => {
  switch (action.type) {
    case 'SET_LOCALE':
      return {
        // set to 'cimode' to have i18next render translation keys instead of values
        locale: action.locale
      };
    default:
      return state;
  }
};

export default i18n;
