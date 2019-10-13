import { combineReducers } from 'redux';

const reviewsInitialState = {
  items: {
    reviews: [],
  },
  error: null,
  isLoading: false,
};

const reviews = (state = reviewsInitialState, action) => {
  switch (action.type) {
    case 'FETCH_REVIEWS_PENDING':
      return {
        ...state,
        isLoading: true,
      };

    case 'FETCH_REVIEWS_FULFILLED':
      return {
        ...state,
        isLoading: false,
        items: action.payload,
      };

    default:
      return state;
  }
};

export default combineReducers({
  reviews,
});
