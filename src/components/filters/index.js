import React from 'react';
import styled from 'styled-components';
import SortingCard from './sorting-card';
import RatingCard from './rating-card';

const FiltersWrapper = styled.div`
  flex-basis: 30%;
`;

const Filters = ({
  ratings,
  filters,
  changeReviewsFilter,
  changeReviewsSorting,
}) => {
  const filterValue = filters.stars;
  return (
    <FiltersWrapper>
      <RatingCard
        filterValue={filterValue}
        filters={filters}
        ratings={ratings}
        changeReviewsFilter={changeReviewsFilter}
      />
      <SortingCard
        changeReviewsSorting={changeReviewsSorting}
        filters={filters}
      />
    </FiltersWrapper>
  );
};

export default Filters;
