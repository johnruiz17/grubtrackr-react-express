const { GOOGLE_API_KEY } = require('../envVars');
const { Loader } = require('@googlemaps/js-api-loader');

const googleApi = {};

const loader = new Loader({
  apiKey: GOOGLE_API_KEY
});


module.exports = googleApi;