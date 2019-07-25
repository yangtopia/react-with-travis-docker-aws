import { createReducer, getType } from 'typesafe-actions';
import { ping, pong, typing } from './ping.actions';

export interface PingState {
  isPing: boolean;
  text: string;
}

export const pingReducer = createReducer<PingState>(
  { isPing: false, text: '' },
  {
    [getType(ping)]: (state) => ({ ...state, isPing: true }),
    [getType(pong)]: (state) => ({ ...state, isPing: false }),
    [getType(typing)]: (state, action) => ({ ...state, text: action.payload }),
  }
);
