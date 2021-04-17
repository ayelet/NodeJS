const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 8000;
const usersRoute = require("./routes/workers.routes");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/workers", usersRoute);

app.listen(port, () => {
  console.log(`server listening at ${port}`);
});

// const express = require("express");
// const bodyParser = require("body-parser");


// const port = 8001;
// // const outer = express.Router();
// const workersRoute = require('./routes/workers.route')
// // const app = express();

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// app.get("/", (req, res) => {
//   console.log("$$$express get", users);
//   res.json({ body: { success: "success" } });
// });

// app.get("/workers", (req, res) => {
//   console.log("$$$express get", users);
//   res.json({ body: { success: users } });
// });

// // display data
// app.get("/worker/:id", (req, res) => {
//   console.log("$$$express get", req.params);
//   let filtered = users.filter((worker) => worker.id === 0);
//   console.log("filtered worker: ", filtered);
//   res.json({
//     body: {
//       success: workers.filter((worker) => {
//         return worker.id == req.params.id;
//       }),
//     },
//   });
// });
// // create new data
// app.post("/addworker", function (req, res) {
//   //   res.send("POST request - add worker to the database");

//   //   const { name, capsule } = req.body;

//   //   const {"id":24,"first_name":"Morissa","last_name":"Essam","email":"messamn@tuttocitta.it"},
//   const { id, first_name, last_name } = req.body;
//   console.log("PUT request at port " + port);
//   console.log(req.body, req.params.id);
//   const { capsule, name } = req.body;
//   //   workers.push({
//   //     id: workers[workers.length - 1].id + 1,
//   //     capsule: parseInt(capsule),
//   //     name: name,
//   //   });
//   //   console.log(workers);
//   console.log(req.body);
//   return res.status(200).json({ success: "worker added to db" });
// });

// update existing data
// app.put("/worker/:id", (req, res) => {
//   console.log("PUT request at port " + port);
//   console.log(req.body, req.params.id);
//   const { capsule, name } = req.body;

//   let found = workers.find((worker) => worker.id === parseInt(req.params.id));
//   if (found.length === 0) {
//     console.log("worker not found");
//     return res.status(404).send("worker not found");
//   }
//   let index = workers.indexOf(found);
//   console.log(found, index);
//   if (parseInt(capsule) < 0) return res.status(203).send("invalid content");

//   workers[index].name = name;
//   workers[index].capsule = parseInt(capsule);
//   console.log(workers);

//   res.status(200).send("updated. PUT request at port " + port);
// });

// remove data
// app.delete("/worker/:id", (req, res) => {
//   console.log("Delete worker", req.params);
//   let found = workers.find((worker) => worker.id === parseInt(req.params.id));
//   if (found.length === 0) {
//     console.log("worker not found");
//     return res.status(404).send("worker not found");
//   }

//   let index = workers.indexOf(found);
//   console.log(found, index);

//   workers.splice(index, 1);
//   console.log(workers);

//   // res.status(200).send("deleted. PUT request at port " + port);
//   res.status(200).send("DELETE request at port " + port);
// });

// // listen
// app.listen(port, () => {
//   console.log("server is running at port " + port);
//   //   console.log(workers);
// });
