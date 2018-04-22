const categories = (state = [], action) => {
  switch (action.type) {
    case 'SET_CATEGORIES':
      console.log('setcateg');
      return [
        ...action.categories
      ];
    default:
      return state;
  }
};

export default categories;
