import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic, rootReducer } from './modules';
import { composeWithDevTools } from 'redux-devtools-extension';

export default function configureStore(initialState) {
  const epicMiddleware = createEpicMiddleware();
  const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(epicMiddleware)));

  epicMiddleware.run(rootEpic);

  return store;
}
