import React, { useState } from 'react';
import '../styles/main.scss';
import ReviewContainer from '../containers/ReviewContainer.jsx';
import RestaurantDisplay from '../containers/RestaurantDisplay.jsx';
import RestaurantQuery from '../containers/RestaurantQuery.jsx';
import Navbar from './Navbar.jsx';

{
  /* <h1>This is a header</h1>
<h2>This is a secondary header</h2>
<h3>This is a tertiary header</h3> */
}

const App = () => {
  return (
    <>
    <Navbar />
    <div id='app'>
      <RestaurantQuery />
      <RestaurantDisplay />
      <ReviewContainer />
    </div>
    </>
  );
};

export default App;
