// require model & pg-format
const db = require('../models/models.js');
const googleApi = require('../models/googleApiModel.js');
const format = require('pg-format');
const { YELP_API_KEY } = require('../envVars.js');
const yelpApi = require('../models/yelpApiModel.js');

// declaring controller object to be exported
const controller = {};

// declaring headers object with necessary authorization information for the Yelp API call
const headers = {
  Authorization: `Bearer ${YELP_API_KEY}`,
  Accept: 'application/json',
  Authorization: `Bearer ${YELP_API_KEY}`,
  Accept: 'application/json',
};

// fetching from Yelp API
controller.fetchYelpRestaurants = async (req, res, next) => {
  try {
    // declaring location variable
    let location;

    // if [location] route parameter doesn't exist, declare location variable and assign "San Francisco" to it
    // else destructure the route parameter
    if (req.body.location) {
      location = req.body.location;
    } else {
      location = 'San Francisco';
    }

    // setting the url with the search parameter inside of it
    // LIMITED TO TEN RESULTS FOR TESTING
    const url = `https://api.yelp.com/v3/businesses/search?location=${location}&sort_by=best_match&limit=50`;

    const data = await fetch(url, { headers });
    const restaurantData = await data.json();
    res.locals.restaurants = restaurantData;

    return next();
  } catch (err) {
    return next({
      log: `Express caught error in controller.fetchYelpRestaurants.`,
      message: {
        err: 'An error occurred with fetching restaurant information from Yelp.',
      },
    });
  }
};

controller.showReviews = async (req, res, next) => {
  try {
    // destructuring the id from req.params
    const { id } = req.params;
    // setting the url with the search parameter inside of it
    // LIMITED TO TEN RESULTS FOR TESTING
    const url = `https://api.yelp.com/v3/businesses/${id}/reviews?limit=10&sort_by=yelp_sort`;

    const data = await fetch(url, { headers });
    const reviews = await data.json();
    res.locals.reviews = reviews;

    return next();
  } catch (err) {
    return next({
      log: `Express caught error in controller.showReviews: ${err}`,
      message: {
        err: 'An error occurred with fetching review information from Yelp.',
      },
    });
  }
};

controller.nextPage = async (req, res, next) => {
  console.log(req);
  try {
    const { location, offset } = req.params;

    const restaurants = await yelpApi.getPage(location, offset);
    res.locals.restaurants = restaurants;

    return next();
  } catch (err) {
    return next({
      log: `Error in controller.nextPage with fetching the next offset of data: ${err}`,
      message: {
        err: 'An error occured in controller.nextPage.',
      },
    });
  }
};

module.exports = controller;
