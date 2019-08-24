import React, { Component } from 'react';
import { connect } from 'react-redux';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const API_DOMAIN = publicRuntimeConfig.API_DOMAIN;

class ViralPage extends Component {
  static async getInitialProps() {
    return {};
  }

  render() {
    return <h1>{API_DOMAIN}</h1>;
  }
}

export default connect()(ViralPage);
