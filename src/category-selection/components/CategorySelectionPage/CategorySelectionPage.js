import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withTheme } from 'material-ui/styles';
import CategoryBoxesList from '../CategoryBoxesList/CategoryBoxesList';

const categories = [
  {
    id: 0,
    title: 'Educatie',
    isActive: true
  },
  {
    id: 1,
    title: 'Sanatate',
    isActive: false
  },
  {
    id: 2,
    title: 'Infrastructura',
    isActive: true
  },
  {
    id: 3,
    title: 'Codul penal',
    isActive: true
  },
  {
    id: 4,
    title: 'Codul fiscal',
    isActive: false
  },
  {
    id: 5,
    title: 'Bugetul de stat',
    isActive: false
  },
  {
    id: 6,
    title: 'Media',
    isActive: true
  },
  {
    id: 7,
    title: 'Non-profit',
    isActive: false
  }
];

class CategorySelectionPage extends Component {
  render() {
    return (
      <div>
        <CategoryBoxesList
          categories={categories}
          onChange={id => isActive => {}}
        />
      </div>
    );
  }
}

export default withTheme()(CategorySelectionPage);
