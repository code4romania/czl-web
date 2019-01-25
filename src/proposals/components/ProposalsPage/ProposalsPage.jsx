import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

class ProposalsPage extends Component {
  render() {
    return <p>{this.props.t('proposals.pageTitle')}</p>;
  }
}

ProposalsPage.propTypes = {
  // translate HoC:
  t: PropTypes.func
};

export default translate()(ProposalsPage);
