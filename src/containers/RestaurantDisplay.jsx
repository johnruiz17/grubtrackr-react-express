import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateRest, getNext } from '../slices/restaurantsSlice';
import RestaurantCard from '../components/RestaurantCard.jsx';
//import that slice of state here

const RestaurantDisplay = () => {
  //get the updated array of Restaurants from state
  const restaurant = useSelector((state) => state.restaurants.restList);
  const status = useSelector((state) => state.restaurants.status);
  console.log(restaurant);

  // here can we initialize restaurant to get request to all restaurants?
  const dispatch = useDispatch();
  // do a get request to all of our restaurants

  const displayArray = [];

  //iterate through the array of Restaurant objects
  restaurant.forEach((el, index) => {
    displayArray.push(
      <RestaurantCard
        key={index}
        info={el}
        restaurantId={el.id}
      />
    );
  });
  //create an instance of Restaurant Card for each object
  //pass the object down as a prop

  return (
    <div className='resDisplay'>
      <div className='status'>{status}</div>
      <button onClick={() => dispatch(getNext())}>Next Page</button>
      {displayArray}
    </div>
  );
};

export default RestaurantDisplay;
