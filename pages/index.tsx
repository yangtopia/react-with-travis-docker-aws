import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { ping, pong } from '../src/redux/modules/ping/ping.actions';
import { RootState } from '../src/redux/modules';

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

class Index extends React.Component<{ isPing: boolean; ping: any; pong: any; text: string }> {
  onClickPing = () => {
    const { ping } = this.props;
    ping();
  };

  onClickPong = () => {
    const { pong } = this.props;
    pong();
  };

  render() {
    const { isPing, text } = this.props;
    return (
      <React.Fragment>
        <Title>Redux Observable TEST {`${isPing} -- ${text}`}</Title>
        <button onClick={() => this.onClickPing()}>PING</button>
        <button onClick={() => this.onClickPong()}>PONG</button>
      </React.Fragment>
    );
  }
}

export default connect(
  (state: RootState) => ({ isPing: state.pingReducer.isPing, text: state.pingReducer.text }),
  {
    ping,
    pong,
  }
)(Index);
