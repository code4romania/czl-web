import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { I18nextProvider } from 'react-i18next';

import i18n from './i18n';

class I18nProvider extends Component {
  componentWillUpdate(nextProps) {
    if (nextProps.preferredLanguage !== this.props.preferredLanguage) {
      i18n.changeLanguage(nextProps.preferredLanguage);
    }
  }

  render() {
    return (
      <I18nextProvider i18n={i18n}>
        {this.props.children}
      </I18nextProvider>
    );
  }
}

I18nProvider.propTypes = {
  children: PropTypes.node,
  // connect:
  preferredLanguage: PropTypes.string
};

const mapStateToProps = state => ({
  preferredLanguage: state.i18n.preferredLanguage
});

export default connect(mapStateToProps)(I18nProvider);
