import React, { Component } from 'react';
import './App.css';
import Reviews from './components/reviews';
import Filters from './components/filters';
import { createGlobalStyle } from 'styled-components';
import { connect } from 'react-redux';
import { fetchReviews } from './actions';

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
    const { reviews } = this.props;
    return (
      <div className="app-wrapper">
        <GlobalStyle />
        <Filters />
        <Reviews reviews={reviews} />
      </div>
    );
  }
}
const mapStateToProps = state => ({ reviews: state.reviews });
const mapDispatchToProps = {
  fetchReviews,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
