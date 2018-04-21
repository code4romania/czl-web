import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withTheme } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Switch from 'material-ui/Switch';
import Typography from 'material-ui/Typography';
import './CategoryBox.css';

class CategoryBox extends Component {
	render() {
		return (
			<Paper className="CategoryBox">
				<Typography
					variant='title'
				>
					{this.props.title}
				</Typography>
				<Switch
          checked={this.props.isActive}
          onChange={this.props.onClick}
          color="secondary"
        />
			</Paper>
		);
	}
}

CategoryBox.propTypes = {
	title: PropTypes.string.isRequired,
	isActive: PropTypes.bool.isRequired,
	onClick: PropTypes.func.isRequired,
	theme: PropTypes.object.isRequired
};

export default withTheme()(CategoryBox);