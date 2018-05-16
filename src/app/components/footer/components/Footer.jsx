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
  footer: {
    backgroundColor: "#fcfcfc",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: '100%',
    position: "absolute",
    bottom: 0,
    padding: "3em 0"
  },
  socialIcons: {
    height: "1.25em",
    width: "1.25em",
    margin: "0 1em 0 1em",
    color: theme.palette.secondary.dark
  },
  copywrite: {
    fontFamily: "Source Code Pro",
    margin: "2em 0 1.25em 0"
  },
  legal: {
    fontFamily: "Raleway",
    marginBottom: "2em"
  },
  terms: {
    marginRight: "2em",
  },
  logo: {
    width: "10em",
  }
});

class Footer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.footer}>
        <div>
          <SvgIcon className={classes.socialIcons}>
            <Facebook />
          </SvgIcon>
          <SvgIcon className={classes.socialIcons}>
            <Twitter />
          </SvgIcon>
          <SvgIcon className={classes.socialIcons}>
            <GithubCircle />
          </SvgIcon>
          <SvgIcon className={classes.socialIcons}>
            <Linkedin />
          </SvgIcon>
        </div>
        <div className={classes.copywrite}>
          © 2018 Code for Romania. Organizație neguvernamentală independentă,
          neafiliată politic și apolitică.
        </div>
        <div className={classes.legal}>
          <span className={classes.terms}>Termeni si conditii</span><span>Politica de confidentialitate</span>
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
