// @flow
import {
  applyMiddleware,
  compose,
  createStore,
} from 'redux';
import { AsyncStorage } from 'react-native';
import { createEpicMiddleware } from 'redux-observable';
import { routerMiddleware } from 'react-router-redux';
import createEncryptor from 'redux-persist-transform-encrypt';
import createHistory from 'history/createMemoryHistory';

import { reducers } from '../reducers';
import * as names from '../constants/reducerNames';

export const history = createHistory();
let enhancer = null;
let middleware = [
  routerMiddleware(history),
];

if (__DEV__) {
  const reduxImmutableStateInvariant = require('redux-immutable-state-invariant').default();
  const createLogger = require('redux-logger').createLogger;

  const logger = createLogger({ collapsed: true });
  middleware = [...middleware, reduxImmutableStateInvariant, logger];
} else {
  middleware = [...middleware];
}

let initialState = {};
enhancer = compose(
  applyMiddleware(...middleware),
);

export function configureStore() {
  return createStore(
    reducers,
    initialState,
    enhancer
  );
}

export const persistConfig = {
  whitelist: [
  ],
  storage: AsyncStorage,
  // transforms: [
  //   encryptor,
  // ],
};

export const purgeConfig = {
  whitelist: [],
  storage: AsyncStorage,
};
