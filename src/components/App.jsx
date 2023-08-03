import React, { useState } from 'react';
import '../styles/main.scss';
import ReviewContainer from '../containers/ReviewContainer.jsx';
import RestaurantQuery from '../containers/RestaurantQuery.jsx';
import Navbar from './Navbar.jsx';
import Bodycontainer from '../containers/Bodycontainer.jsx';

const App = () => {
	return (
		<div>
			<Navbar />
			<div className='app'>
				<RestaurantQuery />
				<Bodycontainer />
			</div>
		</div>
	);
};

export default App;
