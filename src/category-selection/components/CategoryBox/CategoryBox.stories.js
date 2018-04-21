import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import CategoryBox from './CategoryBox';

storiesOf('CategorySelection', module).add('CategoryBox', () => (
  <CategoryBox title="Educatie" isActive={true} onClick={action('clicked')} />
));
