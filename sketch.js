let sound1, sound2, sound3, sound4, sound5, sound6, sound7, sound8;

let img, img2;

let myFont;

let starSize; // Initial size of the star

function preload() {
  sound1 = loadSound("gain-logo1.mp3");
  sound2 = loadSound("gain-logo2.mp3");
  sound3 = loadSound("stomp-logo1.mp3");
  sound4 = loadSound("stomp-logo2.mp3");
  sound5 = loadSound("ah-yeah.mp3");
  sound6 = loadSound("airhorn-sound.mp3");
  sound7 = loadSound("reverb-reverse-scratch.mp3");
  sound8 = loadSound("nebula-bistro.mp3");

  img = loadImage("DJ.jpg");
  img2 = loadImage("bg2.jpg");

  myFont = loadFont("CevicheOne-Regular.ttf");
}

function setup() {
  var canvas = createCanvas(380, 480);
  
  canvas.parent('project');
  
  background(0);
  image(img2, 0, 0, 380, 480);

  delay = new p5.Delay();
}

function draw() {
  fill(random(255), random(44), random(222));
  textFont(myFont);
  textSize(43);
  image(img, 200, 320, 170, 170);
  text("Energertic Sound Box", 20, 50);
}

function keyPressed() {
  starSize = random(50, 100);

  if (key == "1") {
    sound8.play();
    fill(0);
    strokeWeight(10);
    stroke(random(255), random(255), random(255)); //Turquoise color
    drawStar(200, 200, starSize, starSize / 2, 5);
    noStroke();
  }
  if (key == "2") {
    sound6.play();
    fill(0);
    strokeWeight(10);
    stroke(random(255), random(255), random(255)); //Turquoise color
    drawStar(200, 200, starSize, starSize / 2, 5);
    noStroke();
  }
  if (key == "3") {
    sound7.play();
    fill(0);
    strokeWeight(10);
    stroke(random(255), random(255), random(255)); //Turquoise color
    drawStar(200, 200, starSize, starSize / 2, 5);
    noStroke();
  }
  if (key == "4") {
    //if key W is pressed
    sound2.play();
    fill(0);
    strokeWeight(10);
    stroke(255, 99, 71); //Tomato color
    drawStar(200, 200, starSize, starSize / 2, 5);
    noStroke();
    delay.process(sound2, 0.12, 0.7, 2300);
  }
  if (key == "5") {
    //if key A is pressed
    sound1.play();
    fill(0);
    strokeWeight(10);
    stroke(64, 224, 208); //Turquoise color
    drawStar(200, 200, starSize, starSize / 2, 5);
    noStroke();
  }
  if (key == "6") {
    //if key D is pressed
    sound4.play();
    fill(0);
    strokeWeight(10);
    stroke(112, 128, 144); //Slate Gray
    drawStar(200, 200, starSize, starSize / 2, 5);
    noStroke();
  }
  if (key == "7") {
    //if key S is pressed
    sound3.play();
    fill(0);
    strokeWeight(10);
    stroke(255, 215, 0); //Gold color
    drawStar(200, 200, starSize, starSize / 2, 5);
    noStroke();
  }
}

function mousePressed() {
  if (mouseIsPressed) {
    sound5.play();
    fill(0);
    strokeWeight(10);
    stroke(random(255), random(255), random(255)); //Turquoise color
    drawStar(200, 200, starSize, starSize / 2, 5);
    noStroke();
  }
}

function keyReleased() {
  // background(0); // Clear the canvas
  //   fill(255);
  //   textSize(23);
  //   text("Energertic Sound Box", 20, 50);
  image(img2, 0, 0, 380, 480);
}

// Function to draw a star
function drawStar(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
