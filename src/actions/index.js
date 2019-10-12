import axios from 'axios';

const APIUrl = 'https://sellics-frontend-test.herokuapp.com/reviews';

export const fetchReviews = () => ({
  type: 'FETCH_REVIEWS',
  payload: axios.get(`${APIUrl}/1`).then(response => response.data),
});
