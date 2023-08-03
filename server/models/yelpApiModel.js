const { YELP_API_KEY } = require('../envVars');

// we can use this model to communicate with the API
const yelpApi = {};

const headers = {
  Authorization: `Bearer ${YELP_API_KEY}`,
  Accept: 'application/json',
};

//use this to build a restaurant query string
const restaurantUrlHelper = (params) => {
  const { location, limit, offset, sort_by } = params;

  let restaurantUrl = 'https://api.yelp.com/v3/businesses/search?';
  if (!location) {
    throw Error('You must supply a location to search');
  } else {
    restaurantUrl += `location=${location}`;
  }

  if (offset) {
    restaurantUrl += `&offset=${offset}`;
  }

  if (sort_by) {
    restaurantUrl += `&sort_by=${sort_by}`;
  }

  if (!limit) {
    limit = 50;
  }
  restaurantUrl += `&limit=${limit}`;

  return restaurantUrl;
};

yelpApi.getPage = async (
  location,
  offset,
  limit = 50,
  sort_by = 'best_match'
) => {
  url = restaurantUrlHelper({ location, offset, limit, sort_by });
  console.log(url);
  const data = await fetch(url, { headers });
  const restaurantData = await data.json();

  return restaurantData;
};

module.exports = yelpApi;
