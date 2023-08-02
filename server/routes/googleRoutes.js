const express = require('express');

// import controller file
const googleController = require('../controllers/googleController.js');

// declaring router for restaurant routes
const googleRouter = express.Router();

googleRouter.get('/', googleController.setCenter, (req, res) => {
  res.status(200).json(res.locals.center);
});

module.exports = googleRouter;
