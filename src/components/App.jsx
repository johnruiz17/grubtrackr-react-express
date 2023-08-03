import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
        <Router>
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <Bodycontainer />
                  {/* <ReviewContainer /> */}
                </>
              }
            />
            <Route
              path='/restaurant'
              element={<div>render restaurant component here</div>}
            />
          </Routes>
        </Router>
        <Map />
      </div>
    </>
  );
};

export default App;
