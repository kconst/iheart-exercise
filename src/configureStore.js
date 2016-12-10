import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './reducers';

import fakeServerRenderedData from './fakeData.json';

const loggerMiddleware = createLogger();

export default function configureStore(preloadedState = fakeServerRenderedData) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  )
}