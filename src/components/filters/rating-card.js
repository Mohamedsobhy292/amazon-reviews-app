import React from 'react';
import {
  FilterCard,
  FiltersTitle,
  FiltersListItem,
  RadioInput,
  InputLabel,
} from './filters-Styles';

const number = 5;
const starsArr = Array(number)
  .fill(0)
  .map((star, index) => index + 1);

export const RatingCard = ({ ratings, filterValue, changeReviewsFilter }) => {
  const isRatingAvaliable = star => {
    return ratings.includes(star);
  };
  return (
    <FilterCard>
      <FiltersTitle>Filter By</FiltersTitle>
      <ul>
        {starsArr.filter(isRatingAvaliable).map(star => {
          const checked = filterValue === String(star);
          return (
            <FiltersListItem key={star}>
              <InputLabel htmlFor={`star-${star}`}>
                <RadioInput
                  onChange={e => changeReviewsFilter(e.target.value)}
                  value={star}
                  type="radio"
                  id={`star-${star}`}
                  name="stars-filter"
                  checked={checked}
                />
                <span>{star} stars</span>
              </InputLabel>
            </FiltersListItem>
          );
        })}
      </ul>
    </FilterCard>
  );
};

export default RatingCard;
