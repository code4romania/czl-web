import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles, withTheme } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import List, { ListItem, ListSubheader } from 'material-ui/List';

import ProposalListItem from '../ProposalListItem/ProposalListItem';

const styles = theme => ({
  listItem: {
    padding: 2 * theme.spacing.unit,
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing.unit
    },
    [theme.breakpoints.down('xs')]: {
      padding: 0,
      paddingBottom: theme.spacing.unit
    }
  }
});

const WrappedListItems = withStyles(styles, { withTheme: true })(
  ({ proposals, onView, onFollow, classes }) => {
    return proposals.map(proposal => {
      const listItemProps = {
        ...proposal,
        onView,
        onFollow
      };

      return (
        <ListItem key={proposal.id} className={classes.listItem}>
          <ProposalListItem {...listItemProps} />
        </ListItem>
      );
    });
  }
);

class ProposalList extends Component {
  render() {
    const { proposals, onView, onFollow } = this.props;
    const followedProposals = proposals.filter(
      proposal => proposal.isFollowing
    );
    const unfollowedProposals = proposals.filter(
      proposal => !proposal.isFollowing
    );

    return (
      <Grid container spacing={0}>
        {followedProposals.length > 0 ? (
          <Grid item xs={12} sm={6}>
            <List
              disablePadding
              subheader={
                <ListSubheader component="div" disableSticky>
                  Propuneri in urmarire
                </ListSubheader>
              }
            >
              <WrappedListItems
                proposals={followedProposals}
                onView={onView}
                onFollow={onFollow}
              />
            </List>
          </Grid>
        ) : null}
        <Grid item xs={12} sm={followedProposals.length > 0 ? 6 : 12}>
          <List
            disablePadding
            subheader={
              followedProposals.length > 0 ? (
                <ListSubheader component="div" disableSticky>
                  Alte propuneri
                </ListSubheader>
              ) : null
            }
          >
            <WrappedListItems
              proposals={unfollowedProposals}
              onView={onView}
              onFollow={onFollow}
            />
          </List>
        </Grid>
      </Grid>
    );
  }
}

ProposalList.propTypes = {
  proposals: PropTypes.arrayOf(PropTypes.object).isRequired,
  onView: PropTypes.func.isRequired,
  onFollow: PropTypes.func.isRequired
};

export default withTheme()(ProposalList);
