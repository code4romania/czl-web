import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import List, { ListItem, ListItemText } from 'material-ui/List';

import NavDrawer from './NavDrawer';

storiesOf('NavDrawer', module)
  .add('open', () => (
    <NavDrawer open={true} >
      <List>
        <ListItem button>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Categorii" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Propuneri" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Institutii" />
        </ListItem>
      </List>
    </NavDrawer>
  ));
