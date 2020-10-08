//game States
var CAKE = 0;
var INFORM = 1;
var gameState = CAKE;

//images
var cakeImg;
var informImg;
var giftImg;
var thankImg;

function preload() {
  //load images here
  cakeImg = loadImage("cake.png");
  informImg = loadImage("inform.png");
  giftImg = loadImage("gift.png");
  thankImg = loadImage("thankyou.png");
}

function setup() {
  //create canvas
  createCanvas(windowWidth, windowHeight - 5);
  
}

function draw() {

    //if game states 
    if (gameState === CAKE) {
        background(cakeImg);

        if (keyDown("space")) {
            gameState = INFORM;
        }
    }

    if (gameState === INFORM) {
      background(informImg);
  }

  drawSprites();

}