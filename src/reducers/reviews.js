const reviewsInitialState = {
  data: {
    reviews: [],
  },
  currentPage: 1,
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
        data: {
          reviews: [...state.data.reviews, ...action.payload.reviews],
          hasMore: action.payload.hasMore,
        },
        currentPage: state.currentPage + 1,
      };

    default:
      return state;
  }
};

export default reviews;
