import React, { useState } from 'react';
import '../styles/main.scss';

const Mapcontainer = () => {
	return (
		<div>
			<iframe id='mapiframe' loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/search?q=restaurants%20near%20San%20Francisco%2C%20CA%2C%20USA&key=AIzaSyD-QQgbPI08Nv84JqOuaaQrrxLXpkgrwmM"></iframe>
		</div>
	);
};

export default Mapcontainer;
