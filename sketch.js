var car,wall;
var speed,weight;
var carDeformation;
var gameState = "play";

function setup() {

createCanvas(1600,400);

car = createSprite(50, 300, 50, 50);

wall = createSprite(1150,200,20,400);
wall.shapeColor = "grey";

}

function draw() {
  background(255,255,255);  

  if (gameState==="play"){
    car.shapeColor = "blue";

    textSize(30);
    text("Press Space to start the checking",200,200);

    if (keyDown("space")){
      speed = Math.round(random(55,90));
      weight = Math.round(random(400,1500));
      
      car.velocityX = speed;
    }

    if (wall.x-car.x<(wall.width+car.width)/2){
      car.velocityX = 0;

      carDeformation = (0.5*weight*speed*speed)/22500;

        if (carDeformation<100&& carDeformation>0){
          car.shapeColor = "green";
        }else if(carDeformation>100&&carDeformation<180){
          car.shapeColor = "yellow"; 
        } else if (carDeformation>180){
          car.shapeColor = "red";
        } 
      gameState = "end";
    }
  } else if (gameState==="end"){
    textSize(30);
    text(" Press Enter to Restart",200,200);
      if (keyDown("enter")){
        gameState = "play";
        car.x = 50;
        car.y = 300;
      }
  }
  drawSprites();
}