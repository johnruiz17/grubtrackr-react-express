import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../styles/main.scss';
import Mapcontainer from '../components/Map.jsx';
import RestaurantDisplay from './RestaurantDisplay.jsx';
import RestaurantReviewCard from '../components/RestaurantReviewCard.jsx';

const Restaurantmapcontainer = () => {
	return (
		<div id='bodycontainer'>
			<Router>
				<Routes>
					<Route path='/' element={<RestaurantDisplay />} />
					<Route path='/restaurant' element={<div>asdfasdf</div>} />
				</Routes>
			</Router>
			<Mapcontainer />
		</div>
	);
};

export default Restaurantmapcontainer;
