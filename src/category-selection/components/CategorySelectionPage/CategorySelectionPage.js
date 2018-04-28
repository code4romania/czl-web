import React, { Component } from 'react';
import { connect } from 'react-redux';

import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Input, { InputAdornment } from 'material-ui/Input';
import Tabs, { Tab } from 'material-ui/Tabs';
import Search from '@material-ui/icons/Search';
import Grid from 'material-ui/Grid';
import CategoryBoxesList from '../CategoryBoxesList/CategoryBoxesList';

import { setCategories } from '../../../categories';
import { setSelectedCategories, toggleCategory } from '../../actions';
import Hidden from 'material-ui/Hidden/Hidden';

const selectedCategoryIds = [0, 3, 5];

const categories = [
  {
    id: 0,
    title: 'Educatie'
  },
  {
    id: 1,
    title: 'Sanatate'
  },
  {
    id: 2,
    title: 'Infrastructura'
  },
  {
    id: 3,
    title: 'Codul penal'
  },
  {
    id: 4,
    title: 'Codul fiscal'
  },
  {
    id: 5,
    title: 'Bugetul de stat'
  },
  {
    id: 6,
    title: 'Media'
  },
  {
    id: 7,
    title: 'Non-profit'
  }
];

const styles = theme => ({
  page: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  info: {
    maxWidth: 1000,
    marginBottom: 3 * theme.spacing.unit
  },
  tabBar: {
    width: '100%',
    marginBottom: 2 * theme.spacing.unit
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
    alignSelf: 'flexEnd'
  },
  input: {
    margin: theme.spacing.unit,
    [theme.breakpoints.down('sm')]: {
      marginBottom: 2 * theme.spacing.unit
    }
  },
  descriptionSecondary: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  }
});

class CategorySelectionPageBase extends Component {
  state = {
    tabIndex: 0
  };

  handleChange = (event, value) => {
    this.setState({ tabIndex: value });
  };

  componentDidMount() {
    // TODO: replace with async fetch actions once the API is ready
    this.props.setCategories(categories);
    this.props.setSelectedCategories(selectedCategoryIds);
  }

  render() {
    const { categories, toggleCategory, classes } = this.props;
    const { tabIndex } = this.state;

    return (
      <div className={classes.page}>
        <Typography
          component="div"
          variant="headline"
          color="inherit"
          className={classes.info}
        >
          <span>
            Despre ce categorie de legi ai dori sa primesti notificari?
          </span>
          <br />
          <span className={classes.descriptionSecondary}>
            Selecteaza, din tabul de categorii, domeniile de mai jos si alegele
            pe cele mai importante pentru tine. Vei fi alertat de fiecare data
            cand un proiect de lege care te-ar putea interesa intra in
            dezbatere.<br />Daca vrei sa urmaresti o institutie anume,
            selecteaz-o din tab-ul de institutii.
          </span>
        </Typography>
        <Hidden mdUp>{this.renderSearchBar()}</Hidden>
        <Paper elevation={0} className={classes.tabBar}>
          <Grid container alignItems="flex-end" justify="space-between">
            <Grid item xs={12} sm={4}>
              <Tabs
                value={tabIndex}
                indicatorColor="primary"
                textColor="primary"
                onChange={this.handleChange}
                fullWidth
              >
                <Tab label="Categorii de legi" />
                <Tab label="Institutii" />
              </Tabs>
            </Grid>
            <Hidden smDown>
              <Grid item xs={12} sm={4}>
                {this.renderSearchBar()}
              </Grid>
            </Hidden>
          </Grid>
        </Paper>
        {tabIndex === 0 ? (
          <CategoryBoxesList
            categories={categories}
            onChange={id => isActive => toggleCategory(id)}
          />
        ) : null}
      </div>
    );
  }

  renderSearchBar() {
    const { classes } = this.props;
    return (
      <Input
        placeholder="Cauta"
        className={classes.input}
        type="search"
        inputProps={{
          'aria-label': 'Search'
        }}
        startAdornment={
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        }
        fullWidth
      />
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories.map(category => ({
    ...category,
    isActive: state.categorySelection.indexOf(category.id) !== -1
  }))
});

const actionCreators = {
  toggleCategory,
  setSelectedCategories,
  setCategories
};

const CategorySelectionPage = withStyles(styles, { withTheme: true })(
  CategorySelectionPageBase
);

export { CategorySelectionPage };

export default connect(mapStateToProps, actionCreators)(CategorySelectionPage);
