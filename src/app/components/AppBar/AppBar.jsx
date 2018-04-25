import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import { withStyles } from 'material-ui/styles';
import AppBarMUI from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Menu, { MenuItem } from 'material-ui/Menu';
import Hidden from 'material-ui/Hidden';
import List, { ListItem, ListItemText } from 'material-ui/List';

import NavDrawer from '../NavDrawer/NavDrawer';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  topMenu: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  userName: {
    marginLeft: 20,
    marginTop: -3
  },
  topToolbar: {
    display: 'flex',
    alignItems: 'center'
  },
  selectedItem: {
    color: theme.palette.primary.main
  }
});

const NavItem = withRouter(({ route, render, location, history }) => render({ selected: location.pathname === route, navigate: () => history.push(route) }));

const DrawerItem = withStyles(styles, { withTheme: true })(({ onClick, selected, label, classes }) => (
  <ListItem button onClick={onClick}>
    <ListItemText classes={selected ? {
      primary: classes.selectedItem
    } : {}}
      primary={label} />
  </ListItem>
));

const DrawerNavItem = ({ route, label }) => (
  <NavItem route={route} render={({ selected, navigate }) => (
    <DrawerItem selected={selected} onClick={navigate} label={label} />
  )} />
);

const TopMenuNavItem = ({ route, label }) => (
  <NavItem route={route} render={({ selected, navigate }) => (
    <Button color={selected ? 'secondary' : 'inherit'} onClick={navigate}>{label}</Button>
  )} />
)

class AppBar extends Component {
  state = {
    drawerOpen: false,
    anchorEl: null
  };

  handleDrawerToggle = () => {
    this.setState({ drawerOpen: !this.state.drawerOpen });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  render() {
    const { classes, auth } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <AppBarMUI position="static">
          <Toolbar>
            <IconButton
              className={`${classes.menuButton} ${classes.navIconHide}`}
              color="inherit"
              aria-label="Menu"
              onClick={this.handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="title"
              color="inherit"
              className={classes.flex}
            >
              CZL
            </Typography>
            {!auth && <Button color="inherit">Login</Button>}
            {auth && (
              <div className={classes.topToolbar}>
                <div className={classes.topMenu}>
                  <TopMenuNavItem route='/' label='Home' />
                  <TopMenuNavItem route='/categories' label='Categorii' />
                  <TopMenuNavItem route='/proposals' label='Propuneri legislative' />
                  <TopMenuNavItem route='/institutions' label='Institutii' />
                </div>
                <Typography
                  variant="body1"
                  color="inherit"
                  className={classes.userName}
                >
                  {auth.user.name}
                </Typography>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  <MenuItem onClick={this.handleClose}>My account</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBarMUI>

        <Hidden mdUp>
          <NavDrawer open={this.state.drawerOpen}
            onClose={this.handleDrawerToggle}>
            <List>
              <div
                tabIndex={0}
                role="button"
                onClick={this.handleDrawerToggle}
                onKeyDown={this.handleDrawerToggle}
              >
                <DrawerNavItem route='/' label='Home' />
                <DrawerNavItem route='/categories' label='Categorii' />
                <DrawerNavItem route='/proposals' label='Propuneri legislative' />
                <DrawerNavItem route='/institutions' label='Institutii' />
              </div>
            </List>
          </NavDrawer>
        </Hidden>
      </div>
    );
  }
}

AppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  auth: PropTypes.object
};

export default withStyles(styles, { withTheme: true })(AppBar);


