import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import CategoryBoxesList from './CategoryBoxesList';

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

storiesOf('CategorySelection', module).add('CategoryBoxesList', () => (
  <CategoryBoxesList
    categories={categories}
    onChange={id => action(`category-change-${id}`)}
  />
));
