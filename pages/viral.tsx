import React, { Component } from 'react';
import { connect } from 'react-redux';

class ViralPage extends Component {
  static async getInitialProps({ query }) {
    console.log(query);
    return {};
  }

  render() {
    return <h1>TEST</h1>;
  }
}

export default connect()(ViralPage);
