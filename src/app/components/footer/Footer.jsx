import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Grid from "@material-ui/core/Grid";
import grey from "@material-ui/core/colors/grey";
import SvgIcon from "@material-ui/core/SvgIcon";
import { Facebook, GithubCircle, Linkedin, Twitter } from "mdi-material-ui";
import { Link } from "react-router-dom";

const styles = theme => ({
  root: {
    backgroundColor: "#fff",
    padding: "50px 0",
    marginTop: 60,
    overflowX: "hidden"
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
    textAlign: "center"
  },
  legal: {
    fontFamily: "Raleway",
    marginBottom: 30,
    fontSize: 14
  },
  links: {
    color: grey[700]
  },
  logo: {
    height: 30
  }
});

class Footer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid
        container
        className={classes.root}
        alignItems="center"
        direction="column"
        justify="center"
      >
        <Grid
          container
          spacing={40}
          className={classes.socialIcon}
          justify="center"
        >
          <Grid item>
            <a
              href="https://www.facebook.com/code4romania/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SvgIcon>
                <Facebook className={classes.svg} />
              </SvgIcon>
            </a>
          </Grid>
          <Grid item>
            <a
              href="https://twitter.com/Code4Romania"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SvgIcon>
                <Twitter className={classes.svg} />
              </SvgIcon>
            </a>
          </Grid>
          <Grid item>
            <a
              href="https://github.com/code4romania/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SvgIcon>
                <GithubCircle className={classes.svg} />
              </SvgIcon>
            </a>
          </Grid>
          <Grid item>
            <a
              href="https://www.linkedin.com/company/code4romania/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SvgIcon>
                <Linkedin className={classes.svg} />
              </SvgIcon>
            </a>
          </Grid>
        </Grid>
        <Grid item xs={9} className={classes.copywrite}>
          © 2018 Code for Romania. Organizație neguvernamentală independentă,
          neafiliată politic și apolitică.
        </Grid>
        <Grid container spacing={16} className={classes.legal} justify="center">
          <Grid item>
            <Link to="/terms" className={classes.links}>
              <span className={classes.terms}>Termeni si conditii</span>
            </Link>
          </Grid>
          <Grid item>
            <Link to="/privacy" className={classes.links}>
              <span>Politica de confidentialitate</span>
            </Link>
          </Grid>
        </Grid>
        <div>
          <img
            className={classes.logo}
            src={require(`../../../images/footer-logo.png`)}
            alt="icon"
          />
        </div>
      </Grid>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
