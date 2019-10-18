const filtersInitialState = {
  stars: '5',
  sorting: 'ascending',
  groupBy: 'month',
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
    case 'CHANGE_REVIEWS_GROUPING':
      return {
        ...state,
        groupBy: action.payload,
      };

    default:
      return state;
  }
};

export default filters;
