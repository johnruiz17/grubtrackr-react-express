import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../styles/main.scss';
import Mapcontainer from '../components/Map.jsx';
import RestaurantDisplay from './RestaurantDisplay.jsx';
import RestaurantReviewCard from '../components/RestaurantReviewCard';

const Restaurantmapcontainer = () => {
  return (
    <div id='bodycontainer'>
      <Router>
        <Routes>
          <Route
            path='/'
            element={<RestaurantDisplay />}
          />
          <Route
            path='/restaurant'
            element={<RestaurantReviewCard />}
          />
        </Routes>
      </Router>
      <Mapcontainer />
    </div>
  );
};

export default Restaurantmapcontainer;
