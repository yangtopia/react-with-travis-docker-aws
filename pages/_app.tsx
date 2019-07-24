import React from 'react';
import App, { Container, AppProps } from 'next/app';
import '../style.css';

class MyApp extends App<AppProps> {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;
