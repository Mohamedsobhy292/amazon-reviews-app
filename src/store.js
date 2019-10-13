import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import initialReducer from './reducers/index';
import promise from 'redux-promise-middleware';

const middlewares = [thunk, promise];

const enhancers = compose(
  applyMiddleware(...middlewares),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(initialReducer, enhancers);

export default store;
