import React, { useState } from 'react';
import '../styles/main.scss';
import ReviewContainer from '../containers/ReviewContainer.jsx';
import RestaurantQuery from '../containers/RestaurantQuery.jsx';
import Navbar from './Navbar.jsx';
import Bodycontainer from '../containers/Bodycontainer.jsx';
import Map from '../components/Map';

const App = () => {
  return (
    <>
      <Navbar />
      <RestaurantQuery />
      <div className='app'>
        <Bodycontainer />
      </div>
    </>
  );
};

export default App;
