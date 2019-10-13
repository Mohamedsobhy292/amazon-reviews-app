import { combineReducers } from 'redux';

const reviewsInitialState = {
  data: {
    reviews: [],
  },
  error: null,
  isLoading: false,
};

const filtersInitialState = {
  stars: '5',
  sorting: 'ascending',
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
        data: action.payload,
      };

    default:
      return state;
  }
};

const filters = (state = filtersInitialState, action) => {
  switch (action.type) {
    case 'CHANGE_RATING_FILTER':
      return {
        ...state,
        stars: action.payload,
      };
    case 'CHANGE_REVIEWS_SORTING':
      return {
        ...state,
        sorting: action.payload,
      };

    default:
      return state;
  }
};

export default combineReducers({
  reviews,
  filters,
});
