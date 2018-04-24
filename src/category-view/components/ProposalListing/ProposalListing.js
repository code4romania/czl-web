import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  listing: {
    display: 'flex',
    alignItems: 'center'
  },
  listingContent: {
  	padding: theme.spacing.unit,
  	display: 'flex',
  	flexDirection: 'column',
  	width: '100%'
  },
  date: {
  	padding: 3 * theme.spacing.unit,
  	textAlign: 'center'
  },
  button: {
    margin: theme.spacing.unit,
    float: 'right'
  }
});

class ProposalListing extends Component {
	render() {
		const { date, description, badges, isFollowing, classes, theme } = this.props;
		const [ year, month, day ] = date.split('-');

		return (
			<Paper className={classes.listing}>
				<span className={classes.date}>{`${day}.${month}`}<br/>{year}</span>
				<div className={classes.listingContent}>
					<div>{badges}</div>
					<p>{description}</p>
					<div className={classes.actions}>
						{isFollowing ? null :
				      <Button variant="raised" color="secondary" className={classes.button}>
				        Urmareste
				      </Button>
				    }
						<Button variant="raised" color="primary" className={classes.button}>
			        Vezi Timeline
			      </Button>			      
					</div>
				</div>
			</Paper>
		);
	}
}

ProposalListing.propTypes = {
	date: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	badges: PropTypes.arrayOf(PropTypes.object).isRequired,
	isFollowing: PropTypes.bool.isRequired
};

export default withStyles(styles, { withTheme: true })(ProposalListing);
