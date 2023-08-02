const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();

// import controller file
const controller = require('../controllers/controller.js');

// declaring router for restaurant routes
const restaurantRouter = express.Router();


// fetching SF restaurant data from Yelp API upon initial app load
restaurantRouter.post('/', controller.fetchYelpRestaurants, (req, res) => {
  res.status(200).json(res.locals.restaurants);
});

// fetching from Yelp API based on the search bar result
restaurantRouter.get('/:location', controller.fetchYelpRestaurants, (req, res) => {
  res.status(200).json(res.locals.restaurants);
});





module.exports = restaurantRouter;