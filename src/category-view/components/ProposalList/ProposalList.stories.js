import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import ProposalList from './ProposalList';

const followedProposals = [
  {
    id: 1002,
    date: '2018-03-12',
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
    isFollowing: true
  }
];

const unfollowedProposals = [
  {
    id: 1001,
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
      },
      {
        label: 'Pe ordinea de zi',
        color: 'lightblue'
      }
    ],
    isFollowing: false
  },
  {
    id: 1003,
    date: '2018-02-10',
    description:
      'Propunere de lege pentru ratificarea Tratatului intre Romania si Republica Federativa a Braziliei',
    badges: [
      {
        label: 'Comisii',
        color: 'lightgreen'
      }
    ],
    isFollowing: false
  }
];

storiesOf('Category View', module).add('ProposalList existing user', () => (
  <ProposalList
    proposals={followedProposals.concat(unfollowedProposals)}
    onView={action('view proposal')}
    onFollow={action('follow proposal')}
  />
));

storiesOf('Category View', module).add('ProposalList new user', () => (
  <ProposalList
    proposals={unfollowedProposals}
    onView={action('view proposal')}
    onFollow={action('follow proposal')}
  />
));
