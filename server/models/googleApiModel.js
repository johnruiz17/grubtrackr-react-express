const { GOOGLE_API_KEY } = require('../envVars');
const { Loader } = require('@googlemaps/js-api-loader');

const googleApi = {};

const loader = new Loader({
  apiKey: GOOGLE_API_KEY
});

googleApi.getCenter = () => {
  return {
    lat: 37.7704,
    lng: -122.4197
  };
};

module.exports = googleApi;