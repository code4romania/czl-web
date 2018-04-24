import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import ProposalListing from './ProposalListing';

const props = {
	date: '2018-04-10',
	description: 'Propunere de lege pentru ratificarea Tratatului intre Romania si Republica Federativa a Braziliei',
	badges: ['Senat', 'Pe ordinea de zi'],
	isFollowing: false 
};

storiesOf('Category View', module).add('ProposalListing', () => <ProposalListing {...props} />);
