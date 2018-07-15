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

class Terms extends Component {
  render() {
    // const { classes } = this.props;
    return (
      <div>
          {/* Place Terms and Conditions Here */}
      </div>
    );
  }
}

Terms.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Terms);
