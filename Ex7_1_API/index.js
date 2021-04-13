const axios = require("axios");
const request = require("postman-request");
const superagent = require("superagent");

// 1. Use axios
const url1 = "https://pokeapi.co/api/v2/pokemon/ditto";

// axios.get(url1).then(
//   (response) => {
//     console.log(response);
//   },
//   (error) => {
//     console.log(error);
//   }
// );

//2. Use Request
const url2 =
  "http://api.weatherstack.com/current?access_key=85f299a3b790f6accdc9abf4c26e3b0b&query=37.8267,-122.4253";
request({ url: url2, json: true }, (error, response) => {
  if (error) {
    console.log("unable to connect to weather services");
  } else if (response.body.error) {
    console.log("could not find location");
  } else {
    //   const data = JSON.parse(response.body);
    console.log(response.body.current);
    console.log(
      response.body.current.weather_descriptions[0] +
        ": It is currently " +
        response.body.current.temperature +
        " degrees out there. There is a " +
        response.body.current.precip +
        "% chance of rain. "
    );
  }
});

// 3. use Third-Party (superagent)

// const url3 = "https://api.chucknorris.io/jokes/random";
// // callback
// superagent.get(url3).end((err, res) => {
//   if (err) return console.log(err);
//   //   console.log(res);
//   console.log(res.body.value);
// });
