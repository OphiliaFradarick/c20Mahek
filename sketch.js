var fixedRect, movingRect;

function setup() {
  createCanvas(1500,800);
  
  fixedRect = createSprite(400,400,50,80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(700,400,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background(0);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
    && fixedRect.x -  movingRect.x < movingRect.width/2 + fixedRect.width/2){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }

  drawSprites();
}