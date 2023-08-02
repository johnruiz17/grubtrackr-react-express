// require model & pg-format
const db = require('../models/models.js');
const format = require('pg-format');

const controller = {};

// middleware: obtain restaurants matching selected criteria from 'restaurants' in DB
controller.getRestaurants = async (req, res, next) => {
  try {
    let query = `SELECT * FROM restaurants`;

    // if [location] route parameter doesn't exist, declare location variable and assign "San Francisco" to it
    // else destructure the route parameter
    if (req.body.location) {
      location = req.body.location;
    } else {
      location = 'San Francisco';
    }

    // setting the url with the search parameter inside of it
    // LIMITED TO TEN RESULTS FOR TESTING
    const url = `https://api.yelp.com/v3/businesses/search?location=${location}&sort_by=best_match&limit=20`;

    const data = await fetch(url, { headers });
    const restaurantData = await data.json();
    res.locals.restaurants = restaurantData;

    return next();
  } catch (err) {
    return next({
      log: `Express caught error in controller.getRestaurants: ${err}`,
      message: {
        err: 'An error occurred with fetching restaurant information.',
      },
    });
  }
};

// middleware: submit review information to 'reviews' in DB
controller.submitReview = async (req, res, next) => {
  try {
    const { staffAttitude, service, review, recommendation, bathroomVibe } =
      req.body;

    const reviewSubmission = `INSERT INTO review (staff_attitude, service, review, recommendation, bathroom_vibe)
    VALUES ('${staffAttitude}', '${service}', '${review}', '${recommendation}', '${bathroomVibe}')
    RETURNING *`;
    const data = await db.query(reviewSubmission);
    // console.log('data test', data.rows);
    res.locals.addedReview = data.rows[0];
    return next();
  } catch (err) {
    return next({
      log: `Express caught error in controller.submitReview: ${err}`,
      message: {
        err: 'An error occurred with submitting your review.',
      },
    });
  }
};

module.exports = controller;
