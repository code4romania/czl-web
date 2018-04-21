import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import AppBar from './AppBar';

storiesOf('AppBar', module)
  .add('non authenthicated', () => <AppBar />)
  .add('authenthicated', () => (
    <AppBar auth={{ user: { name: 'Alejandro' } }} />
  ));
