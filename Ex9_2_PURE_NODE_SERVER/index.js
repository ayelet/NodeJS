const http = require("http");
const fs = require("fs");
const users = require("./users.json");
const { debug } = require("postman-request");
const PORT = 8080;
// debugger;
const server = http.createServer(function (req, res) {
  console.log("START: req:", req.url);
  console.log("request url:", req.url);
  if (req.url === "/favicon.ico") {
    res.writeHead(200, { "Content-Type": "image/x-icon" });
    res.end();
    console.log("favicon requested");
    return;
  }
  if (req.url === "/raw-html") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Welcome</h1>");
    res.end();
    return;
  }
  if (req.url === "/users") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write(JSON.stringify(users));
    res.end();
    return;
  }
  if (req.url === "/index.html") {
    fs.readFile("./public/index.html", function (err, data) {
      if (err) {
        res.writeHead(404);
        res.write("Not Found!");
        res.end();
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      }
    });
  }
  // send a static css
  else if (/^\/[a-zA-Z0-9\/]*.css$/.test(req.url.toString())) {
    const fileName = "./public/index.css";
    console.log("file requested: ", req.url, req.url.toString().substring(1));
    // sendFileContent(res, req.url.toString().substring(1), "text/css");
    sendFileContent(res, fileName, "text/css");
  } else if (/^\/[a-zA-Z0-9\/]*.js$/.test(req.url.toString())) {
    const fileName = "./public/index.js";
    console.log("file requested: ", req.url, req.url.toString().substring(1));
    // sendFileContent(res, req.url.toString().substring(1), "text/javascript");
    sendFileContent(res, fileName, "text/css");
  } else {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(
      "<b>Hey there!</b><br /><br />This is the default res. Requested URL is: " +
        req.url
    );
    res.end();
  }
});

server.listen(PORT, () => {
  console.log("server listening on port 8080");
});

function sendFileContent(response, fileName, contentType) {
  console.log("sending file content: ", fileName);
  fs.readFile(fileName, function (err, data) {
    if (err) {
      console.log("error in reading file ", fileName);
      response.writeHead(404);
      response.write("Not Found!");
    } else {
      console.log("success in reading file ", fileName);
      response.writeHead(200, { "Content-Type": contentType });
      response.write(data);
      console.log("res: write data");
    }
    response.end();
    console.log("ending response");
  });
}
