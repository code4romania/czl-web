import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import ProposalListItem from './ProposalListItem';

const props = {
  id: 1234,
  date: '2018-04-10',
  description:
    'Propunere de lege pentru ratificarea Tratatului intre Romania si Republica Federativa a Braziliei',
  badges: [
    {
      label: 'Senat',
      color: 'lightpink'
    },
    {
      label: 'Pe ordinea de zi',
      color: 'lightblue'
    }
  ],
  isFollowing: false,
  onFollow: action('follow proposal'),
  onView: action('show proposal')
};

storiesOf('Category View', module).add('ProposalListItem', () => (
  <ProposalListItem {...props} />
));
