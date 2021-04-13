const request = require("postman-request");
// const forwardGeoCodingUrl = "geocoding/v5/mapbox.places/{search_text}.json";
const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYXllbGV0ZCIsImEiOiJja25mcms1Z2QwMDY0MnZvYmE5YmloM2U3In0.-7cGum8OlB6x8wrPWTiqdg";
  //   const url =
  //     "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
  //     encodeURIComponent(address) +
  //     ".json&access_token=pk.eyJ1IjoiYXllbGV0ZCIsImEiOiJja25mcms1Z2QwMDY0MnZvYmE5YmloM2U3In0.-7cGum8OlB6x8wrPWTiqdg";

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("unable to connect to geocode services", undefined);
    } else if (!response.body.features) {
      callback("could not find location", undefined);
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[0],
        longitude: response.body.features[0].center[1],
        location: response.body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
