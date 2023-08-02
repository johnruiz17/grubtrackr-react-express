import React, { useState } from 'react';
import '../styles/main.scss';
import { GOOGLE_API_KEY } from '../../server/envVars';

const Mapcontainer = () => {
	return (
		<div>
			<iframe id='mapiframe' loading="lazy" allowfullscreen src={`https://www.google.com/maps/embed/v1/search?q=restaurants%20near%20San%20Francisco%2C%20CA%2C%20USA&key=${GOOGLE_API_KEY}`}></iframe>
		</div>
	);
};

export default Mapcontainer;
