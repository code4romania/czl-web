import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withTheme } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import CategoryBox from '../CategoryBox/CategoryBox';

class CategoryBoxeslist extends Component {
	renderCategories = () => this.props.categories.map((category) => {
		return (
			<Grid item key={category.title}>
				<CategoryBox {...category} />
			</Grid>
		);
	});

	render() {
		return (
			<Grid 
				container 
				spacing={16}
				alignItems='center'
				justify='center'
			>
				{this.renderCategories()}
			</Grid>
		);
	}
}

CategoryBoxeslist.propTypes = {
	categories: PropTypes.arrayOf(PropTypes.object).isRequired,
	theme: PropTypes.object.isRequired
};

export default withTheme()(CategoryBoxeslist);