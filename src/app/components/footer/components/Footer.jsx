import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import SvgIcon from "@material-ui/core/SvgIcon";
import {
  Facebook,
  GithubCircle,
  Linkedin,
  Twitter,
} from "mdi-material-ui";

const styles = theme => ({
  background: {
    backgroundColor: "#fcfcfc",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  svgs: {
    height: "1.25em",
    width: "1.25em",
    margin: "0 1em 0 1em",
    color: theme.palette.secondary.dark
  },
  copywrite: {
    fontFamily: "Roboto",
  },
  logo: {
    width: "10em",
  }
});

class Footer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.background}>
        <div className="socialIcons">
          <SvgIcon className={classes.svgs}>
            <Facebook />
          </SvgIcon>
          <SvgIcon className={classes.svgs}>
            <Twitter />
          </SvgIcon>
          <SvgIcon className={classes.svgs}>
            <GithubCircle />
          </SvgIcon>
          <SvgIcon className={classes.svgs}>
            <Linkedin />
          </SvgIcon>
        </div>
        <div className={classes.copywrite}>
          © 2018 Code for Romania. Organizație neguvernamentală independentă,
          neafiliată politic și apolitică.
        </div>
        <div>
          <img className={classes.logo} src={require(`../../../../images/footer-logo.png`)} alt="icon" />
        </div>
      </div>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
