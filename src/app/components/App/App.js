import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { MuiThemeProvider } from 'material-ui/styles';
import { withStyles } from 'material-ui/styles';
import CssBaseline from 'material-ui/CssBaseline';

import AppBar from '../AppBar/AppBar';

import { HomePage } from '../../../home';
import { CategoriesPage } from '../../../categories';
import { ProposalsPage } from '../../../proposals';
import { InstitutionsPage } from '../../../institutions';

import theme from '../../../theme';

const styles = theme => ({
  content: {
    padding: theme.spacing.unit,
    marginTop: 4 * theme.spacing.unit,
    [theme.breakpoints.up('md')]: {
      marginTop: 8 * theme.spacing.unit,
      marginLeft: 8 * theme.spacing.unit,
      marginRight: 8 * theme.spacing.unit
    }
  }
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <div>
            <AppBar auth={{ user: { name: 'Alejandro' } }} />

            <div className={classes.content}>
              <Route exact path="/" component={HomePage} />
              <Route path="/categories" component={CategoriesPage} />
              <Route path="/proposals" component={ProposalsPage} />
              <Route path="/institutions" component={InstitutionsPage} />
            </div>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
