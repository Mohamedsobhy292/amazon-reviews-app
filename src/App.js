import React, { Component } from 'react';
import Reviews from './components/reviews';
import Filters from './components/filters';
import { createGlobalStyle } from 'styled-components';
import { connect } from 'react-redux';
import { fetchReviews } from './actions';
import {
  getSortedReviews,
  getAllRatings,
  getGroupedReviews,
} from './selectors';
import {
  changeReviewsFilter,
  changeReviewsSorting,
  changeReviewsGrouping,
} from './actions';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
   background: #EEEEEE;
   color: #546E7A;
   padding: 25px;
   font-family: 'Roboto', sans-serif;

  }

  ul {
    list-style: none;
  }

  .app-wrapper {
    display: flex;
    width: 80%;
    margin: auto;
  }
`;

class App extends Component {
  componentDidMount() {
    this.props.fetchReviews();
  }
  render() {
    const {
      reviews,
      reviewsGrouped,
      filters,
      ratings,
      changeReviewsFilter,
      changeReviewsSorting,
      changeReviewsGrouping,
    } = this.props;
    return (
      <div className="app-wrapper">
        <GlobalStyle />
        <Filters
          reviews={reviews}
          ratings={ratings}
          filters={filters}
          changeReviewsFilter={changeReviewsFilter}
          changeReviewsSorting={changeReviewsSorting}
          changeReviewsGrouping={changeReviewsGrouping}
        />
        <Reviews
          reviews={reviews}
          filters={filters}
          reviewsGrouped={reviewsGrouped}
        />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  reviews: getSortedReviews(state),
  reviewsGrouped: getGroupedReviews(state),
  filters: state.filters,
  ratings: getAllRatings(state),
});
const mapDispatchToProps = {
  fetchReviews,
  changeReviewsFilter,
  changeReviewsSorting,
  changeReviewsGrouping,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
