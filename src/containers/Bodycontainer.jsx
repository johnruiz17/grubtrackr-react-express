import React, { useState } from 'react';
import '../styles/main.scss';
import Mapcontainer from '../components/Map.jsx';
import RestaurantDisplay from './RestaurantDisplay.jsx';
import RestaurantReviewCard from '../components/RestaurantReviewCard.jsx';

const Restaurantmapcontainer = () => {
	return (
        <div id='bodycontainer'>
            <RestaurantDisplay />
            {/* <RestaurantReviewCard/> */}
            <Mapcontainer />
        </div>
	);
};

export default Restaurantmapcontainer;
