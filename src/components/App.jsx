import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../styles/main.scss';
import ReviewContainer from '../containers/ReviewContainer.jsx';
import RestaurantQuery from '../containers/RestaurantQuery.jsx';
import Navbar from './Navbar.jsx';
import Bodycontainer from '../containers/Bodycontainer.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Navbar />
              <div className='app'>
                <RestaurantQuery />
                <Bodycontainer />
                <ReviewContainer />
              </div>
            </>
          }
        />
        <Route
          path='/restaurant'
          element={<div>render restaurant component here</div>}
        />
      </Routes>
    </Router>
  );
};

export default App;
