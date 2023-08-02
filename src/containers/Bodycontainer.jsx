import React, { useState } from 'react';
import '../styles/main.scss';
import Mapcontainer from '../components/Map.jsx';
import RestaurantDisplay from './RestaurantDisplay.jsx'

const Restaurantmapcontainer = () => {
	return (
        <div id='bodycontainer'>
            <RestaurantDisplay />
            <Mapcontainer />
        </div>
	);
};

export default Restaurantmapcontainer;
