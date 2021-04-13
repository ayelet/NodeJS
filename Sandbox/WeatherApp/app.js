// const { response } = require("express");
const request = require("postman-request");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

// request({ url: url }, (error, response) => {
//   const data = JSON.parse(response.body);
//   console.log(data.current);
// });

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log("unable to connect to weather services");
//   } else if (response.body.error) {
//     console.log("could not find location");
//   } else {
//     //   const data = JSON.parse(response.body);
//     console.log(response.body.current);
//     console.log(
//       response.body.current.weather_descriptions[0] +
//         ": It is currently " +
//         response.body.current.temperature +
//         " degrees out there. There is a " +
//         response.body.current.precip +
//         "% chance of rain. "
//     );
//   }
// });

// // Geolocation
// const access_key_mapbox =
//   "pk.eyJ1IjoiYXllbGV0ZCIsImEiOiJja25mcms1Z2QwMDY0MnZvYmE5YmloM2U3In0.-7cGum8OlB6x8wrPWTiqdg";
// const geocodeUrl =
//   "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json&access_token=pk.eyJ1IjoiYXllbGV0ZCIsImEiOiJja25mcms1Z2QwMDY0MnZvYmE5YmloM2U3In0.-7cGum8OlB6x8wrPWTiqdg";

// request({ url: geocodeUrl, json: true }, (error, response) => {
//   if (error) {
//     console.log("could not connect to geolocation service");
//   } else if (response.body.features.length === 0) {
//     console.log("could not find location");
//   } else {
//     console.log(response.body);
//     const latitude = response.body.features[0].center[1];
//     const longitude = response.body.features[0].center[0];
//     console.log(latitude, longitude);
//   }
// });

geocode("Berlin", (error, data) => {
  console.log("Geocode Error", error);
  console.log("Geocode Data", data);
});

forecast(-70.7088, 44.1545, (error, data) => {
  console.log("Forecast error", error);
  console.log("Forecast Data", data);
});

// call should be (after fixing bug with key)
geocode("Berlin", (error, data) => {
  if (error) {
    return console.log(error);
  }

  forecast(data.latitude, data.longitude, (error, forecastData) => {
    if (error) return console.log(error);

    conosle.log(data.location);
    console.log(data.forecastData);
  });
});
