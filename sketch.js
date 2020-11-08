var movingRect, fixedRect;

function setup() {
  createCanvas(1200, 800);
  
  movingRect = createSprite(600, 600, 50, 50);
  fixedRect = createSprite(600, 200, 50, 50);

  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "blue";

  movingRect.velocityY = -5;
  fixedRect.velocityY = 5;
  movingRect.debug = true;
  fixedRect.debug = true;
}


function draw() {
  background(150, 170, 50);  

  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) {
    movingRect.velocityX = movingRect.velocityX * (-1);
    fixedRect.velocityX = fixedRect.velocityX * (-1);
  } 
  if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
      movingRect.velocityY = movingRect.velocityY * (-1);
      fixedRect.velocityY = fixedRect.velocityY * (-1); 
    }

  drawSprites();
}