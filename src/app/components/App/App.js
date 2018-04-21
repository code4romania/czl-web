import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import { withStyles } from 'material-ui/styles';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AppBar from '../AppBar/AppBar';

import { HomePage } from '../../../home';
import { CategoriesPage } from '../../../categories';
import { ProposalsPage } from '../../../proposals';
import { InstitutionsPage } from '../../../institutions';

import theme from '../../../theme';

const styles = theme => ({
  content: {
    padding: 10
  }
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <div />
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
