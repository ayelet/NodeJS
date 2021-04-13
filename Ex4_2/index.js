const express = require("express");
const parse = require("body-parser");
// const url = require("url");
const data = require("./users.json");
const bodyParser = require("body-parser");
const users = data.users;
const port = 8001;
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// const server = http.createServer((req, res) => {
//   const myQuery = url.parse(req.url, true).query;
//   console.log("query is", myQuery);
//   if (req.method === "GET") {
//     if (req.url === "/users") {
//       res.write(JSON.stringify(data.users));
//     } else if (req.url.includes("user")) {
//       console.log("requesting for specific user");
//       res.write(JSON.stringify(users[myQuery.id]));
//     } else if (req.url.includes("capsule")) {
//       console.log("requesting for capsule members");
//       const filtered = users.filter(
//         (user) => user.capsule === parseInt(myQuery.capsule)
//       );
//       //   console.log("filtered users", myQuery.capsule, filtered);
//       res.write(JSON.stringify(filtered));
//     } else {
//       res.write("Hello");
//     }
//   }
//   res.end();
// });
app.get("/", (req, res) => {
  console.log("$$$express get", users);
  res.json({ body: { success: "success" } });
});

app.get("/users", (req, res) => {
  console.log("$$$express get", users);
  res.json({ body: { success: users } });
});

// display data
app.get("/user/:id", (req, res) => {
  console.log("$$$express get", req.params);
  let filtered = users.filter((user) => user.id === 0);
  console.log("filtered user: ", filtered);
  res.json({
    body: {
      success: users.filter((user) => {
        return user.id == req.params.id;
      }),
    },
  });
});
// create new data
app.post("/addUser", function (req, res) {
  //   res.send("POST request - add User to the database");
  const { name, capsule } = req.body;
  users.push({
    id: users[users.length - 1].id + 1,
    capsule: parseInt(capsule),
    name: name,
  });
  console.log(users);
  return res.status(200).json({ success: "user added to db" });
});

// update existing data
app.put("/user/:id", (req, res) => {
  console.log("PUT request at port " + port);
  console.log(req.body, req.params.id);
  const { capsule, name } = req.body;

  let found = users.find((user) => user.id === parseInt(req.params.id));
  if (found.length === 0) {
    console.log("user not found");
    return res.status(404).send("user not found");
  }
  let index = users.indexOf(found);
  console.log(found, index);
  if (parseInt(capsule) < 0) return res.status(203).send("invalid content");

  users[index].name = name;
  users[index].capsule = parseInt(capsule);
  console.log(users);

  res.status(200).send("updated. PUT request at port " + port);
});

// remove data
app.delete("/user/:id", (req, res) => {
  console.log("Delete user", req.params);
  let found = users.find((user) => user.id === parseInt(req.params.id));
  if (found.length === 0) {
    console.log("user not found");
    return res.status(404).send("user not found");
  }

  let index = users.indexOf(found);
  console.log(found, index);

  users.splice(index, 1);
  console.log(users);

  // res.status(200).send("deleted. PUT request at port " + port);
  res.status(200).send("DELETE request at port " + port);
});

// listen
app.listen(port, () => {
  console.log("server is running at port " + port);
  console.log(users);
});
