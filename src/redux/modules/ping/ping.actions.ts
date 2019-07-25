import { createAction } from 'typesafe-actions';

export const ping = createAction('PING');
export const pong = createAction('PONG');

export const typing = createAction('TYPING', (action) => {
  return (text: string) => action(text);
});
