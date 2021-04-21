const express = require("express");
const router = express.Router();
// const workerController = require("../controllers/workers.controller");
const roomsController = require("../controllers/rooms.controllers");

router

  // get a list of all users
  .get("/", async (req, res) => {
    console.log("GET request to fetch all accounts");
    const rooms = await roomsController.getAll(res);
    // console.log("rooms returned from database: ", rooms);
    // return res.status(200).send({ success: roomsController.getAll() });
    // return res.status(200).json({ rooms: roomsController.getAll() });
    // return roomsController.getAll(req, res);
  })
  .get("/:name", (req, res) => {
    console.log("GET reqest for a specific room");
    return res
      .status(200)
      .json({ room: roomsController.getRoom(req.params.name) });
  })
  // get rid of the annoying favicon request
  .get("/favicon.ico", (req, res) => {
    res.writeHead(200, { "Content-Type": "image/x-icon" });
    res.end();
    console.log("favicon requested");
    return;
  })
  .get("/active/:state", (req, res) => {
    roomsController.getActive(req, res);
  })
  .get("/price/:min/:max", (req, res) => {
    return roomsController.getPrice(req, res);
  })
  // get accound by passposrt_id
  //   .get("/:accountId", (req, res) => {
  //     const id = req.params.accountId;
  //     if (!accountsController.validateID(id))
  //       return res.status(422).json("invalid data");
  //     console.log("returning account id", req.params.accountId);
  //     // find account
  //     const found = accountsController.getAccount(id);
  //     console.log("found account: ", found);
  //     if (found) return res.status(200).send(found);

  //     console.log("response not found");
  //     return res.status(404).send("account not found").end();
  //     // return res.sendStatus(404).json({ error: "account not found" });
  //   })
  .post("/", (req, res) => {
    console.log("POST request to create a room");
    roomsController.create(req, res);
    // return res.status(200).json({ room: "room created" });
  });

module.exports = router;
