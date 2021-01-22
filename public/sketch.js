let socket = io();

socket.on("connect", newConnection);

function newConnection() {
  console.log("your id:", socket.id);
}

socket.on("mouseBroadcast", otherMouse);

function setup() {
  createCanvas(900, 900);
  background(30);
}

function otherMouse(data) {
  console.log("received:", data);
  noStroke();
  fill("peachpuff");
  ellipse(data.x, data.y, 20);
}

function mouseDragged() {
  console.log("sending: ", mouseX, mouseY);
  noStroke();
  fill('lavender');

  let message = {
    x: mouseX,
    y: mouseY,
  };
  socket.emit("mouse", message);

  ellipse(mouseX, mouseY, 20);
}

function draw() {

fill('coral')

rect(width/3,0,10,height)
rect(width/3*2,0,10,height)
rect(0,height/3,width,10)
rect(0,height/3*2,width,10)

}
