import axios from 'axios';

const proxy_url = 'https://cors-anywhere.herokuapp.com';
const API_url = 'https://sellics-frontend-test.herokuapp.com/reviews';

export const fetchReviews = () => ({
  type: 'FETCH_REVIEWS',
  payload: axios
    .get(`${proxy_url}/${API_url}/1`)
    .then(response => response.data),
});

export const changeReviewsFilter = rating => ({
  type: 'CHANGE_RATING_FILTER',
  payload: rating,
});

export const changeReviewsSorting = sorting => ({
  type: 'CHANGE_REVIEWS_SORTING',
  payload: sorting,
});
