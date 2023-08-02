const google = require('../models/googleApiModel');

const googleController = {};

googleController.setCenter = (req, res, next) => {
  res.locals.center = google.getCenter();

  return next();
}

module.exports = googleController;