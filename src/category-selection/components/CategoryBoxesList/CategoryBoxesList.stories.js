import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import CategoryBoxesList from './CategoryBoxesList';

const categories = [
	{
		title: 'Educatie',
		isActive: true,
		onClick: action('clicked')
	},
	{
		title: 'Sanatate',
		isActive: false,
		onClick: action('clicked')
	},
	{
		title: 'Infrastructura',
		isActive: true,
		onClick: action('clicked')
	},
	{
		title: 'Codul penal',
		isActive: true,
		onClick: action('clicked')
	},
	{
		title: 'Codul fiscal',
		isActive: false,
		onClick: action('clicked')
	},
	{
		title: 'Bugetul de stat',
		isActive: false,
		onClick: action('clicked')
	},
	{
		title: 'Media',
		isActive: true,
		onClick: action('clicked')
	},
	{
		title: 'Non-profit',
		isActive: false,
		onClick: action('clicked')
	},
];

storiesOf('CategorySelection', module)
	.add('CategoryBoxesList', () => <CategoryBoxesList categories={categories} />);
