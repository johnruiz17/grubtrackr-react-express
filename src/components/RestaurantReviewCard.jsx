import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import '../styles/main.scss';

const RestaurantReviewCard = () => {
	const navigate = useNavigate();
    const reviews = useSelector((state) => state.review);
	console.log(reviews);

	// const { name, image_url, rating, review_count, categories, price } = info;

	return (
		<div className='resCard'>
			<h1>{name}</h1>
			<h2>Cuisine: {categories[0].title}</h2>
			<img id='restaurantPreview' src={image_url}></img>
			<p>
				<strong>Rating: </strong> {rating}
			</p>
			<p>
				<strong>Number of reviews: </strong> {review_count}
			</p>
			<p>
				<strong>Price: </strong> {price}
			</p>
            <p>
				<strong>Reviews: </strong> {reviews}
			</p>
            <button onClick={navigate('/')}>Back</button>
		</div>
	);
  };
  
  export default RestaurantReviewCard;
  