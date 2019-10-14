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

export const getGroupedReviews = state => {
  const sortedReviews = getSortedReviews(state);
  const filtredReviews = filterByRating(sortedReviews, state.filters);

  switch (state.filters.groupBy) {
    case 'day':
      return groupByDay(filtredReviews);
    case 'month':
      return groupByMonth(filtredReviews);
    default:
      return groupByMonth(filtredReviews);
  }
};

export const filterByRating = (reviews, filters) => {
  return reviews.filter(review => String(review.stars) === filters.stars);
};

const groupByMonth = reviews => {
  const result = [];
  reviews.forEach(item => {
    const date = new Date(item.reviewCreated);
    const month = date.getMonth() + 1;
    const monthObject = result.find(function(element) {
      return element.groupTitle === month;
    });
    if (monthObject) {
      monthObject.reviews.push(item);
    } else {
      result.push({
        groupTitle: month,
        reviews: [item],
      });
    }
  });

  return result;
};

const groupByDay = reviews => {
  const result = [];
  reviews.forEach(item => {
    const date = new Date(item.reviewCreated);
    const month = date.getMonth() + 1;
    const dayOfMonth = date.getDate();
    const day = `${dayOfMonth}-${month}`;
    const dayObject = result.find(function(element) {
      return element.groupTitle === day;
    });
    if (dayObject) {
      dayObject.reviews.push(item);
    } else {
      result.push({
        groupTitle: day,
        reviews: [item],
      });
    }
  });

  return result;
};
