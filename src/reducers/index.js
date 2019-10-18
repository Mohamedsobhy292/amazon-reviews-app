import { combineReducers } from 'redux';
import reviews from './reviews';
import filters from './filters';

export default combineReducers({
  reviews,
  filters,
});
