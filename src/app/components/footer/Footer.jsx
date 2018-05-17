import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import grey from "@material-ui/core/colors/grey";
import SvgIcon from "@material-ui/core/SvgIcon";
import { Facebook, GithubCircle, Linkedin, Twitter } from "mdi-material-ui";
import { Link } from 'react-router-dom'

const styles = theme => ({
  footer: {
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: "50px 0"
  },
  socialIcon: {
    height: 32,
    margin: "0 1em 0 1em"
  },
  svg: {
    color: theme.palette.primary.main,
    "&:hover": {
      color: theme.palette.primary.dark
    }
  },
  copywrite: {
    fontFamily: "Source Code Pro",
    margin: "50px 0 12px 0",
    color: grey[700],
    fontSize: 12,
  },
  legal: {
    fontFamily: "Raleway",
    marginBottom: 30,
    color: grey[700],
    fontSize: 14
  },
  terms: {
    marginRight: "2em"
  },
  logo: {
    height: 30
  }
});

class Footer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.footer}>
        <div>
          <a href="https://www.facebook.com/redirectioneaza/" target="_blank">
            <SvgIcon className={classes.socialIcon}>
              <Facebook className={classes.svg} />
            </SvgIcon>
          </a>
          <a href="https://twitter.com/Code4Romania" target="_blank">
            <SvgIcon className={classes.socialIcon}>
              <Twitter className={classes.svg} />
            </SvgIcon>
          </a>
          <a href="https://github.com/code4romania/" target="_blank">
            <SvgIcon className={classes.socialIcon}>
              <GithubCircle className={classes.svg} />
            </SvgIcon>
          </a>
          <a
            href="https://www.linkedin.com/company/code4romania/"
            target="_blank"
          >
            <SvgIcon className={classes.socialIcon}>
              <Linkedin className={classes.svg} />
            </SvgIcon>
          </a>
        </div>
        <div className={classes.copywrite}>
          © 2018 Code for Romania. Organizație neguvernamentală independentă,
          neafiliată politic și apolitică.
        </div>
        <div className={classes.legal}>
        <Link to="/terms"><span className={classes.terms}>Termeni si conditii</span></Link>
          <span>Politica de confidentialitate</span>
        </div>
        <div>
          <img
            className={classes.logo}
            src={require(`../../../images/footer-logo.png`)}
            alt="icon"
          />
        </div>
      </div>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
