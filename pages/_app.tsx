import React from 'react';
import App, { Container } from 'next/app';
import { Provider } from 'react-redux';
import withRedux, { AppProps } from 'next-redux-wrapper';
import configureStore from '../src/redux/configureStore';
import '../style.css';

class MyApp extends App<AppProps> {
  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withRedux(configureStore)(MyApp);
