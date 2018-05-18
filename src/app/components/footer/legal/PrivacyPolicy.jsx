import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";


const styles = theme => ({
  link: {
    textDecoration: "none",
    color: theme.palette.primary.main,
    "&:hover": {
      color: theme.palette.primary.dark
    }
  }
});

class PrivacyPolicy extends Component {
  render() {
    // const { classes } = this.props;
    return (
      <div>
        {/* Place Privacy Policy Here */}
      </div>
    );
  }
}

PrivacyPolicy.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PrivacyPolicy);
