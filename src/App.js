import React, { Component } from 'react';
import Reviews from './components/reviews';
import Filters from './components/filters';
import { createGlobalStyle } from 'styled-components';

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
  render() {
    return (
      <div className="app-wrapper">
        <GlobalStyle />
        <Filters />
        <Reviews />
      </div>
    );
  }
}

export default App;
