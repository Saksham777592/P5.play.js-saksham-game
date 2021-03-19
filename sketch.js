var player;
var ground1, ground2, ground3, ground4, ground5, ground6, ground7, ground8, ground9, ground10, ground11, ground12, 
  ground13;

function preload() {
  backgroundImg = loadImage("images/background.jpg");
}  

function setup() {
  createCanvas(6300, displayHeight - 150);

  player = createSprite(100, displayHeight - 560, 50);

  ground1 = createSprite(500, displayHeight - 205, 1000, 110);
  ground2 = createSprite(1200, displayHeight - 200, 150, 50);
  ground3 = createSprite(1450, displayHeight - 250, 150, 50);
  ground4 = createSprite(1800, displayHeight - 200, 150, 50);
  ground5 = createSprite(2300, displayHeight - 250, 500, 50);
  ground6 = createSprite(2900, displayHeight - 205, 500, 110);
  ground7 = createSprite(3280, displayHeight - 300, 250, 50);
  ground8 = createSprite(4500, displayHeight - 205, 500, 110);
  ground9 = createSprite(4950, displayHeight - 260, 150, 50);
  ground10 = createSprite(5200, displayHeight - 205, 150, 50);
  ground11 = createSprite(5500, displayHeight - 260, 150, 50);
  ground12 = createSprite(5750, displayHeight - 310, 150, 50);
  ground13 = createSprite(6200, displayHeight - 205, 250, 110);

}

function draw() {
  background(backgroundImg);
  
  player.collide(ground1); 
  player.collide(ground2);
  player.collide(ground3); 
  player.collide(ground4); 
  player.collide(ground5); 
  player.collide(ground6); 
  player.collide(ground7); 
  player.collide(ground8);
  player.collide(ground9);
  player.collide(ground10); 
  player.collide(ground11); 
  player.collide(ground12); 
  player.collide(ground13);

  drawSprites();
}
