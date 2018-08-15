import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

import reducer from './reducers/reducer'
import { initialState } from './reducers/initial-state'

export const store = createStore(reducer, initialState, applyMiddleware(
  promiseMiddleware()
));