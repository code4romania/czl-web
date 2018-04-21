import React from 'react';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import purple from 'material-ui/colors/purple';
import green from 'material-ui/colors/green';

import { configure, addDecorator } from '@storybook/react';
import theme from '../src/theme';

addDecorator(story => (
  <MuiThemeProvider theme={theme}>{story()}</MuiThemeProvider>
));

const req = require.context('../src', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
