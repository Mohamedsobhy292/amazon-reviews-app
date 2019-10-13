import React, { Component } from 'react';
import Reviews from './components/reviews';
import Filters from './components/filters';
import { createGlobalStyle } from 'styled-components';
import { connect } from 'react-redux';
import { fetchReviews } from './actions';
import { getSortedReviews, getAllRatings } from './selectors';
import { changeReviewsFilter, changeReviewsSorting } from './actions';

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
      filters,
      ratings,
      changeReviewsFilter,
      changeReviewsSorting,
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
        />
        <Reviews reviews={reviews} filters={filters} />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  reviews: getSortedReviews(state),
  filters: state.filters,
  ratings: getAllRatings(state),
});
const mapDispatchToProps = {
  fetchReviews,
  changeReviewsFilter,
  changeReviewsSorting,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
