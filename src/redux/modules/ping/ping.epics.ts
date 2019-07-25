import { getType } from 'typesafe-actions';
import { ofType } from 'redux-observable';
import { ping, pong, typing } from './ping.actions';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

export const pingEpic = (action$) =>
  action$.pipe(
    ofType(getType(ping)),
    switchMap(() => of(typing('PING')))
  );

export const pongEpic = (action$) =>
  action$.pipe(
    ofType(getType(pong)),
    switchMap(() => of(typing('PONG')))
  );
