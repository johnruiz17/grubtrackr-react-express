const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();

// import controller file
const controller = require('../controllers/controller.js');

// declaring router for restaurant routes
const reviewRouter = express.Router();

// fetching review data for individual restaurants using the id request parameter
reviewRouter.get('/:id', controller.showReviews, (req, res) => {
	res.status(200).json(res.locals.reviews);
});

module.exports = reviewRouter;
