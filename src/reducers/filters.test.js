import filters from './filters';
const filtersInitialState = {
  stars: '5',
  sorting: 'ascending',
  groupBy: 'month',
};

const filtersAfterStarChange = {
  ...filtersInitialState,
  stars: '3',
};

const changeStarAction = {
  type: 'CHANGE_RATING_FILTER',
  payload: '3',
};

const changeReviewsAction = {
  type: 'CHANGE_REVIEWS_SORTING',
  payload: 'whatever',
};

const filtersAfterSortingChange = {
  ...filtersInitialState,
  sorting: 'whatever',
};

const changeGroupingAction = {
  type: 'CHANGE_REVIEWS_GROUPING',
  payload: 'week',
};

const filtersAfterGroupingChange = {
  ...filtersInitialState,
  groupBy: 'week',
};

describe('filter reducer', () => {
  it('should return the initial state', () => {
    expect(filters(filtersInitialState, {})).toEqual(filtersInitialState);
  });

  it('should change the stars correctly', () => {
    expect(filters(filtersInitialState, changeStarAction)).toEqual(
      filtersAfterStarChange
    );
  });

  it('should change the sorting correctly', () => {
    expect(filters(filtersInitialState, changeReviewsAction)).toEqual(
      filtersAfterSortingChange
    );
  });

  it('should change grouping correctly', () => {
    expect(filters(filtersInitialState, changeGroupingAction)).toEqual(
      filtersAfterGroupingChange
    );
  });
});
