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
import Terms from '../footer/Terms';
import PrivacyPolicy from '../footer/PrivacyPolicy';
import Information from '../footer/Information';

import Footer from '../footer/Footer';

import theme from '../../../theme';

const styles = theme => ({
  flexContainer: {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column'
  },
  contentContainer: {
    flex: 1
  },
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
          <div className={classes.flexContainer}>
            <div className={classes.contentContainer}>
              <AppBar auth={{ user: { name: 'Alejandro' } }} />
              <div className={classes.content}>
                <Route exact path="/" component={HomePage} />
                <Route path="/categories" component={CategoriesPage} />
                <Route path="/proposals" component={ProposalsPage} />
                <Route path="/institutions" component={InstitutionsPage} />
                <Route path="/terms" component={Terms} />
                <Route path="/privacy" component={PrivacyPolicy} />
                <Route path="/information" component={Information} />
              </div>
            </div>
            <Footer />
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
