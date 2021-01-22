let socket = io();

socket.on("connect", newConnection);

function newConnection() {
  console.log("your id:", socket.id);
}

socket.on("mouseBroadcast", otherMouse);

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("red");
}

function otherMouse(data) {
  console.log("received:", data);
  noStroke();
  fill("yellow");
  ellipse(data.x, data.y, 20);
}

function mouseDragged() {
  console.log("sending: ", mouseX, mouseY);
  noStroke();
  fill(255);

  let message = {
    x: mouseX,
    y: mouseY,
  };
  socket.emit("mouse", message);

  ellipse(mouseX, mouseY, 20);
}

function draw() {}
