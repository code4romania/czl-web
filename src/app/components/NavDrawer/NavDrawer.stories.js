import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import NavDrawer from './NavDrawer';

storiesOf('NavDrawer', module)
  .add('open', () => <NavDrawer open={true} />);
