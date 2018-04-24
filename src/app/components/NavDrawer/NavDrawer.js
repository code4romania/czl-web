import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';

const drawerWidth = 240;

const styles = theme => ({
  drawerPaper: {
    width: drawerWidth
  }
});

class NavDrawer extends React.Component {

  render() {
    const { classes, theme, open, onClose, children } = this.props;


    return (
      <Drawer
        variant="temporary"
        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
        open={open}
        onClose={onClose}
        classes={{
          paper: classes.drawerPaper,
        }}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        {children}
      </Drawer>
    );
  }
}

NavDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

NavDrawer.defaultProps = {
  open: false,
  onClose: () => { }
};

export default withStyles(styles, { withTheme: true })(NavDrawer);