import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import SortingCard from './sorting-card';
import RatingCard from './rating-card';
import GroupCard from './group-card';
import { getAllRatings } from '../../selectors';
import {
  changeReviewsFilter,
  changeReviewsSorting,
  changeReviewsGrouping,
} from '../../actions';

const FiltersWrapper = styled.div`
  flex-basis: 30%;
`;

const Filters = ({
  ratings,
  filters,
  changeReviewsFilter,
  changeReviewsSorting,
  changeReviewsGrouping,
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
      <GroupCard
        filters={filters}
        changeReviewsGrouping={changeReviewsGrouping}
      />
    </FiltersWrapper>
  );
};

const mapStateToProps = state => ({
  filters: state.filters,
  ratings: getAllRatings(state),
});
const mapDispatchToProps = {
  changeReviewsFilter,
  changeReviewsSorting,
  changeReviewsGrouping,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters);
