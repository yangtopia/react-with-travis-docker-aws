import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import { pingReducer, PingState } from './ping/ping.reducer';
import { pingEpic, pongEpic } from './ping/ping.epics';

export interface RootState {
  pingReducer: PingState
}

export const rootEpic = combineEpics(
  pingEpic,
  pongEpic,
);

export const rootReducer = combineReducers({
  pingReducer,
});
