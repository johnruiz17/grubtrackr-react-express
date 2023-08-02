// require model & pg-format
const db = require('../models/models.js');
const format = require('pg-format');

// declaring controller object to be exported
const controller = {};

// declaring headers object with necessary authorization information for the Yelp API call
const headers = {
  Authorization: 'Bearer k-IATHt6W-L8KtEONPuMqU10UG7KAxKjWX_imA2cFrDsDjsPtxhwpemzXoQ85TA3FvKzmLj0KRrzW8s_B7IvG2zHLiJOCoSlm-nRqr5bIpxUqFdRS1GHZJweMZ_JZHYx',
  Accept: 'application/json',
};

// fetching from Yelp API
controller.fetchYelpRestaurants = async (req, res, next) => { 
  try {
    // declaring location variable
    let location;

    // if [location] route parameter doesn't exist, declare location variable and assign "San Francisco" to it
    // else destructure the route parameter
    if (req.params.location) {
      location = req.params.location;
    } else {
      location = 'San Francisco';
    }

    // setting the url with the search parameter inside of it
    // LIMITED TO TEN RESULTS FOR TESTING
    const url = `https://api.yelp.com/v3/businesses/search?location=${location}&sort_by=best_match&limit=20`

    const data = await fetch(url, { headers });
    const restaurantData = await data.json();
    res.locals.restaurants = restaurantData;

    return next();
  }
  catch (err) {
    return next({
      log: `Express caught error in controller.fetchYelpRestaurants: ${err}`,
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
    const url = `https://api.yelp.com/v3/businesses/${id}/reviews?limit=10&sort_by=yelp_sort`

    const data = await fetch(url, { headers });
    const reviews = await data.json();
    res.locals.reviews = reviews;

    return next();
  }
  catch (err) {
    return next({
      log: `Express caught error in controller.showReviews: ${err}`,
      message: {
        err: 'An error occurred with fetching review information from Yelp.',
      },
    });
  }
};



module.exports = controller;
