import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RestaurantCard from '../components/RestaurantCard.jsx';
import { getNext } from '../slices/restaurantsSlice.js';
//import that slice of state here

const RestaurantDisplay = () => {
	//get the updated array of Restaurants from state
	const restaurant = useSelector(state => state.restaurants.restList);
	const status = useSelector(state => state.restaurants.status);
	// here can we initialize restaurant to get request to all restaurants?
	const dispatch = useDispatch();
	// do a get request to all of our restaurants

	const handleScroll = e => {
		const scrollHeight = e.currentTarget.scrollHeight;
		const offsetHeight = e.currentTarget.offsetHeight;
		const scrollTop = e.currentTarget.scrollTop;
		console.log(scrollTop);
		console.log(scrollHeight);
		if (status === 'succeeded' && scrollTop >= scrollHeight - 2000) {
			dispatch(getNext());
		}
	};

	// grab that data --> array of objects

	// invoke updateRest to update our restaurant state

	// restaurant
	return (
		<div className='resDisplay' onScroll={handleScroll}>
			{restaurant.length ? (
				restaurant.map((el, index) => {
					return <RestaurantCard key={el.id + index} info={el} restaurantId={el.id} address={el.location.display_address} phone={el.display_phone} transactions={el.transactions} categories={el.categories} />;
				})
			) : (
				<></>
			)}
		</div>
	);
};

export default RestaurantDisplay;
