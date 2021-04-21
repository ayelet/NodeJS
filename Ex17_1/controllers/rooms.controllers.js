const roomModel = require("../db/model");
// const roomModel = require("../models/rooms.model");

// 1. Get all rooms
const getRooms = (req, res) => {
  roomModel.find({}).then((rooms) => {
    // console.log(rooms)
    console.log("Getting rooms from db", rooms);
    // return res.sendStatus(200).json({ success: rooms });

    return rooms;
  });
};

// 2. Get a specific product
const getRoom = (name) => {
  console.log("getting room  ", name);
  // roomModel.find({ name: name }).then((room) => room);
  roomModel.find({}).then((room) => room);
};

// 3. Get products that are active
const getActive = (req, res) => {
  const activeState = req.params.state ? req.params.state : true;
  roomModel.find({ isActive: activeState }).then((rooms) => {
    res.json({ success: rooms });
    console.log(rooms);
  });
};
//  4. Get products with a specific price range
const getPrice = (req, res) => {
  const min = req.params.min;
  const max = req.params.max;
  if (!min || !max) return res.json({ error: "min or max must be specified" });
  if (min < 0 || max < 0)
    return res.json({ error: "range limits must be positive numbers" });

  roomModel
    .find({ "details.price": { $gt: min, $lt: max } })
    .then((rooms) => res.status(200).json({ success: rooms }));
};

const createRoom = (req, res) => {
  console.log(req.body);
  // const { roomReq } = req.body;
  const date = Date.now();
  if (req.body.details.dateAdded) date = req.body.details.dateAdded;
  console.log("date Added: ", date);
  const room = new roomModel({
    name: req.body.name,
    category: req.body.category,
    isActive: req.body.isActive,
    // details: {
    //   description: req.body.details.description,
    //   // description: "bla bla",
    //   price: req.body.details.price,
    //   discount: req.body.details.discount,
    //   images: req.body.details.images,
    //   phone: req.body.details.phone,
    //   // dateAdded: req.body.details.dateAdded,
    // },
    details: req.body.details,
  });
  room.save((err) => {
    if (err) {
      console.log("Error in saving entry to db");
      return res.json({ Error: err });
    }
    return res.json({ success: room });
  });
};

const room = new roomModel({
  name: "room1",
  category: "suite",
  isActive: true,
  details: {
    description: "this is a very nice room",
    price: 123,
    discount: 5,
    images: ["image1", "image2"],
    phone: "97243424323",
  },
});

module.exports = {
  getAll: getRooms,
  getRoom,
  create: createRoom,
  getActive,
  getPrice,
};
