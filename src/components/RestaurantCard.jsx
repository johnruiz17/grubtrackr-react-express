import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { moveCenter } from '../slices/googleSlice';
import { updateReview } from '../slices/reviewSlice';

//deconstruct passed down info prop
const RestaurantCard = ({ info, restaurantId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRestaurantClick = async (restaurantId) => {
    try {
      dispatch(moveCenter(position));
      const jsonData = await fetch(
        `http://localhost:3000/restaurant/${restaurantId}`
      );
      const reviews = await jsonData.json();
      console.log(reviews, 'reviews');
      dispatch(updateReview(reviews));
      navigate('/restaurant');
    } catch (err) {
      console.log(`There was an error fetching restaurant reviews: ${err}`);
    }
    navigate('/restaurant');
  };

  const { name, image_url, rating, review_count, categories, price } = info;
  const position = {
    lat: info.coordinates.latitude,
    lng: info.coordinates.longitude,
  };

  return (
    <div
      className='resCard'
      onClick={() => handleRestaurantClick(restaurantId, position)}
    >
      <h1>{name}</h1>
      <h2>Cuisine: {categories[0].title}</h2>
      <img
        id='restaurantPreview'
        src={image_url}
      ></img>
      <p>
        <strong>Rating: </strong> {rating}
      </p>
      <p>
        <strong>Number of reviews: </strong> {review_count}
      </p>
      <p>
        <strong>Price: </strong> {price}
      </p>
    </div>
  );
};

export default RestaurantCard;
