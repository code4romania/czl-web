const categorySelection = (state = [], action) => {
  switch (action.type) {
    case 'SET_SELECTED_CATEGORIES':
      return [
        ...action.selectedIds
      ];
    case 'TOGGLE_CATEGORY':
      const isSelected = state.indexOf(action.id) !== -1;
      return isSelected
        ? state.filter(id => id !== action.id)
        : [...state, action.id]
    default:
      return state;
  }
};

export default categorySelection;
