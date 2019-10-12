import { combineReducers } from 'redux';

const reviewsInitialState = {
  items: {},
  error: null,
  isLoading: false,
};

const reviews = (state = {}, action) => {
  switch (action.type) {
    case 'SIMPLE_ACTION':
      return {
        result: action.payload,
      };
    default:
      return state;
  }
};

export default combineReducers({
  reviews,
});
