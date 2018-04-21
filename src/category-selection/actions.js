export const setSelectedCategories = selectedIds => ({
  type: 'SET_SELECTED_CATEGORIES',
  selectedIds
});

export const toggleCategory = id => ({
  type: 'TOGGLE_CATEGORY',
  id
});
