import React, { useState } from 'react';
import '../styles/main.scss';
import ReviewContainer from '../containers/ReviewContainer.jsx';
import RestaurantDisplay from '../containers/RestaurantDisplay.jsx';
import RestaurantQuery from '../containers/RestaurantQuery.jsx';
import GoogleMap from './GoogleMap';

{
  /* <h1>This is a header</h1>
<h2>This is a secondary header</h2>
<h3>This is a tertiary header</h3> */
}

const App = () => {
  return (
    <GoogleMap />
  );
};

export default App;
