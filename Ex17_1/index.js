const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
app.use(cors());
const port = process.env.PORT || 5000;

const acountsRoute = require("./routes/rooms.routes");

// create application/x-www-form-urlencoded parser
const urlencodedParse = app.use(bodyParser.urlencoded({ extended: false }));

// create application/json parser
const jsonParse = app.use(bodyParser.json());

app.use("/api/rooms", acountsRoute);

//connect to db with mongoose
mongoose
  .connect("mongodb://localhost/HotelDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("database connected: mongodb://localhost/HotelDB");
  });

app.listen(port, () => {
  console.log(`Bank Server listening at ${port}`);
});
