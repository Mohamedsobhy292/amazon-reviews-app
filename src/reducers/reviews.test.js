import reviews from './reviews';
const reviewsInitialState = {
  data: {
    reviews: [],
  },
  currentPage: 1,
  error: null,
  isLoading: false,
};

const loadingAction = {
  type: 'FETCH_REVIEWS_PENDING',
};

const reviewsFullfiledAction = {
  type: 'FETCH_REVIEWS_FULFILLED',
  payload: {
    reviews: [
      {
        id: '12345',
        name: 'reviews 1',
      },
    ],
    hasMore: true,
  },
};

const reviewsOnLoading = {
  ...reviewsInitialState,
  isLoading: true,
};

const reviewsOnFullfilng = {
  ...reviewsInitialState,
  isLoading: false,
  currentPage: 2,
  data: {
    reviews: [
      {
        id: '12345',
        name: 'reviews 1',
      },
    ],
    hasMore: true,
  },
};

describe('filter reducer', () => {
  it('should return the initial state', () => {
    expect(reviews(reviewsInitialState, {})).toEqual(reviewsInitialState);
  });

  it('should set loading state correctly', () => {
    expect(reviews(reviewsInitialState, loadingAction)).toEqual(
      reviewsOnLoading
    );
  });

  it('should fetch reviews correctly', () => {
    expect(reviews(reviewsInitialState, reviewsFullfiledAction)).toEqual(
      reviewsOnFullfilng
    );
  });

  it('should set currentPage correctly', () => {
    expect(reviews(reviewsInitialState, reviewsFullfiledAction)).toEqual(
      reviewsOnFullfilng
    );
  });
});
