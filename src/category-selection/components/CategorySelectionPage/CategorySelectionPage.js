import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withTheme } from 'material-ui/styles';
import CategoryBoxesList from '../CategoryBoxesList/CategoryBoxesList';

import { setCategories } from '../../../categories';
import { setSelectedCategories, toggleCategory } from '../../actions';

const selectedCategoryIds = [0, 3, 5];

const categories = [
  {
    id: 0,
    title: 'Educatie'
  },
  {
    id: 1,
    title: 'Sanatate'
  },
  {
    id: 2,
    title: 'Infrastructura'
  },
  {
    id: 3,
    title: 'Codul penal'
  },
  {
    id: 4,
    title: 'Codul fiscal'
  },
  {
    id: 5,
    title: 'Bugetul de stat'
  },
  {
    id: 6,
    title: 'Media'
  },
  {
    id: 7,
    title: 'Non-profit'
  }
];

class CategorySelectionPageBase extends Component {
  componentDidMount() {
    // TODO: replace with async fetch actions once the API is ready
    this.props.setCategories(categories);
    this.props.setSelectedCategories(selectedCategoryIds);
  }

  render() {
    const { categories, toggleCategory } = this.props;

    console.log(categories);

    return (
      <div>
        <CategoryBoxesList
          categories={categories}
          onChange={id => isActive => toggleCategory(id)}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories.map(category => ({
    ...category,
    isActive: state.categorySelection.indexOf(category.id) !== -1
  }))
});

const actionCreators = ({
  toggleCategory,
  setSelectedCategories,
  setCategories
});

const CategorySelectionPage = withTheme()(CategorySelectionPageBase);

export { CategorySelectionPage };

export default connect(mapStateToProps, actionCreators)(
  CategorySelectionPage
);
