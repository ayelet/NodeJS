const express = require("express");
const router = express.Router();
// const workersDB = require("../workers.json");
const data = require("../workers.json");
const workers = data.workers;
const rooms = data.rooms;

router
  .get("/", (req, res) => {
    return res.status(200).json({ workers: workers });
  })
  .get("/:id", (req, res) => {
    console.log(req.params.id);
    let worker = workers.find(
      (worker) => worker.id === parseInt(req.params.id)
    );
    if (!worker) {
      console.log("worker not found");
      return res.status(204).json({ error: "worker not found" });
    }
    return res.status(200).json({ worker: worker });
  })
  .post("/addWorker", (req, res) => {
    console.log(req.body);
    console.log(workers);
    const { id, name, email } = req.body;
    if (!name) {
      return res.status(204).json({ failure: "No name specified" });
    }
    if (!id) {
      return res.status(204).json({ failure: "No ID specified" });
    }
    // add name validation here ...
    if (name.length < 6 && !name.includes(" ")) {
      return res.status(204).json({ error: "Invalid name" });
    }
    if (workers.find((worker) => worker.id === id)) {
      console.log("ID already exists");
      return res.status(204).send({ error: "ID already exists" });
    }

    workers.push({
      id: id,
      name: name,
      isActive: false,
      email: email,
    });
    console.log(workers);
    return res.status(200).json({ success: "worker add to db" });
  })
  .post("/addRoom", (req, res) => {
    console.log(req.body);
    console.log(rooms);
    const { id, amount, isActive } = req.body;
    let room = rooms.find((room) => room.id == parseInt(id)) ? true : false;
    console.log("found room: ", room);
    if (room.length > 0) {
      return res.status(204).json({ failure: "Room already exists" });
    }
    return res.status(200).json({ success: "room added to db" });
  })

  // if (!name) {
  //   return res.status(204).json({ failure: "No name specified" });
  // }
  //   .put("/:id", (req, res) => {
  //     const { id } = req.params;
  //     const { capsule } = req.body;

  //     if (!capsule || id < 0) {
  //       res.status(204).send("error");
  //     }

  //     let worker = workers.find((u) => {
  //       return u.id == id;
  //     });

  //     if (!worker) {
  //       res.status(204).send("error");
  //     }

  //     workers[id].capsule = capsule;
  //     res.status(200).send("success");
  //   })
  .delete("/:id", (req, res) => {});

module.exports = router;
