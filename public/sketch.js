let socket = io();

socket.on("connect", newConnection);

function newConnection() {
  console.log("your id:", socket.id);
}

socket.on("mouseBroadcast", otherMouse);

function setup() {
  createCanvas(900, 900);
  background(30);

  instructions = createButton("open this app with a friend and play tic-tac-toe");

  instructions.style('font-size', '50px');
  instructions.style('color', 'coral');
  instructions.style("padding", "8px 20px 8px 20px")
  instructions.style('textAlign', 'CENTER')
  instructions.style('color', 'coral')
  instructions.style('font-weight', 200);
  instructions.position("width", "height");
  instructions.style("width", "600px")
  instructions.style("height", "200px");
  instructions.style('border-style', 'none');
  instructions.style('background-color', 'white');
  instructions.style('textAlign', 'CENTER')
  instructions.style('textcolor', 'setAlpha(500 - millis())')
  instructions.mouseClicked(hideText);



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
  noStroke()

  rect(width / 3, 0, 10, height)
  rect(width / 3 * 2, 0, 10, height)
  rect(0, height / 3, width, 10)
  rect(0, height / 3 * 2, width, 10)

}
function hideText(){
  instructions.hide()
}
