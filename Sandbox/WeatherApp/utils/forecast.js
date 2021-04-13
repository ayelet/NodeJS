const request = require("postman-request");

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

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=85f299a3b790f6accdc9abf4c26e3b0b&query=" +
    latitude +
    "," +
    longitude +
    "&units=m";
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("unable to connect to weather services", undefined);
    } else if (response.body.error) {
      callback("could not find location", undefined);
    } else {
      //   const data = JSON.parse(response.body);
      console.log(response.body.current);
      const data =
        response.body.current.weather_descriptions[0] +
        ": It is currently " +
        response.body.current.temperature +
        " degrees out there. There is a " +
        response.body.current.precip +
        "% chance of rain. ";

      callback(undefined, data);
    }
  });
};

module.exports = forecast;
