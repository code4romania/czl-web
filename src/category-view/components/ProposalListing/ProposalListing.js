import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import Chip from 'material-ui/Chip';
import Typography from 'material-ui/Typography';
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
  	fontWeight: 600,
  	textAlign: 'center',
  	[theme.breakpoints.down('xs')]: {
  		padding: 2 * theme.spacing.unit
  	}
  },
  actions: {
  	display: 'flex',
  	justifyContent: 'flex-end'
  },
  button: {
    marginLeft: theme.spacing.unit
  },
  badge: {
  	marginRight: theme.spacing.unit,
  	height: '25px'
  },
  description: {
  	marginTop: '5px',
  	[theme.breakpoints.down('xs')]: {
  		lineHeight: '1.4em'
  	}
  }
});

class ProposalListing extends Component {
	render() {
		const { id, date, description, badges, isFollowing, classes, theme, follow, show } = this.props;
		const [ year, month, day ] = date.split('-');
		
		return (
			<Paper className={classes.listing}>
				<Typography className={classes.date}>
					{`${day}.${month}`}<br/>{year}
				</Typography>
				<div className={classes.listingContent}>
					<div>
						{badges.map((badge, idx) => {
							return (
								<Chip 
									key={idx} 
									label={<Typography>{badge.label}</Typography>} 
									style={{backgroundColor: badge.color}} 
									className={classes.badge}
								/>
							);
						})}
					</div>
					<Typography 
						variant="body2" 
						paragraph 
						className={classes.description}
					>
						{description}
					</Typography>
					<div className={classes.actions}>
						<Button 
							variant="raised" 
							color="primary"
							onClick={() => show(id)}
						>
			        Timeline
			      </Button>
						{isFollowing ? null :
				      <Button 
				      	variant="raised" 
				      	color="secondary" 
				      	className={classes.button}
				      	onClick={() => follow(id)}
				      >
				        Urmareste
				      </Button>
				    }								      
					</div>
				</div>
			</Paper>
		);
	}
}

ProposalListing.propTypes = {
	id: PropTypes.number.isRequired,
	date: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	badges: PropTypes.arrayOf(PropTypes.object).isRequired,
	isFollowing: PropTypes.bool.isRequired,
	follow: PropTypes.func.isRequired,
	show: PropTypes.func.isRequired
};

export default withStyles(styles, { withTheme: true })(ProposalListing);
