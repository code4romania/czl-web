import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withTheme } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import CategoryBox from '../CategoryBox/CategoryBox';

class CategoryBoxeslist extends Component {
  renderCategories = () =>
    this.props.categories.map(category => {
      return (
        <Grid item key={category.title} xs={12} sm={4} md={3}>
          <CategoryBox
            {...category}
            onChange={this.props.onChange(category.id)}
          />
        </Grid>
      );
    });

  render() {
    return (
      <Grid container spacing={16} alignItems="center" justify="center">
        {this.renderCategories()}
      </Grid>
    );
  }
}

CategoryBoxeslist.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChange: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired
};

export default withTheme()(CategoryBoxeslist);
