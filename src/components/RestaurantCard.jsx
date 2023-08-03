import React from 'react';
import { useNavigate } from 'react-router-dom';

//deconstruct passed down info prop
const RestaurantCard = ({ info }) => {
	const navigate = useNavigate();

	const handleRestaurantClick = () => {
		navigate('/restaurant');
	};

	const { name, image_url, rating, review_count, categories, price } = info;
	console.log(categories);

	return (
		<div className='resCard' onClick={handleRestaurantClick}>
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
		</div>
	);
};

export default RestaurantCard;
