let express = require("express");
let app = express();
let port = process.env.PORT || 3000;
let server = app.listen(port);
app.use(express.static("public"));
let socket = require("socket.io");
let io = socket(server);
io.on("connection", newConnection);

function newConnection(socket) {
  console.log("socket:", socket.id);

  socket.on("mouse", mouseMessage);

  function mouseMessage(data) {
    socket.broadcast.emit("mouseBroadcast", data);
    console.log(socket.id, data);
  }
}

console.log("node server is running");
