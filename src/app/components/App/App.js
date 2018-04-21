import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import purple from 'material-ui/colors/purple';
import green from 'material-ui/colors/green';
import Button from 'material-ui/Button';
import theme from '../../../theme';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import AppBar from '../AppBar/AppBar';

import { HomePage } from '../../../home';
import { CategoriesPage } from '../../../categories';
import { ProposalsPage } from '../../../proposals';
import { InstitutionsPage } from '../../../institutions';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div />
        <Router>
          <div>
            <AppBar auth={{ user: { name: 'Alejandro' } }} />

            <Route exact path="/" component={HomePage} />
            <Route path="/categories" component={CategoriesPage} />
            <Route path="/proposals" component={ProposalsPage} />
            <Route path="/institutions" component={InstitutionsPage} />
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
