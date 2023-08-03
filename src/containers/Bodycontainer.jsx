import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../styles/main.scss';
import Mapcontainer from '../components/Map.jsx';
import RestaurantDisplay from './RestaurantDisplay.jsx';

const Restaurantmapcontainer = () => {
	return (
		<div id='bodycontainer'>
			<Router>
				<Routes>
					<Route path='/' element={<RestaurantDisplay />} />
					<Route path='/restaurant' element={<div>render restaurant component here</div>} />
				</Routes>
			</Router>
			<Mapcontainer />
		</div>
	);
};

export default Restaurantmapcontainer;
