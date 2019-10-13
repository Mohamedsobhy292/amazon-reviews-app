export const getSortedReviews = state => {
  const reviews = state.reviews.data.reviews;
  const sortingMethod = state.filters.sorting;
  const sortedReviews = reviews.sort((a, b) => {
    if (sortingMethod === 'ascending') {
      return a.reviewCreated - b.reviewCreated;
    }
    return b.reviewCreated - a.reviewCreated;
  });

  return sortedReviews;
};

export const getAllRatings = state => {
  const reviews = state.reviews.data.reviews;
  const ratings = reviews.map(review => review.stars);
  return ratings;
};
