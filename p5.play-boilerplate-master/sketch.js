var bullet, speed, weight;
var wall, thickness;
var collide=1;

function setup() {
  createCanvas(1600,400);

  thickness=random(22,83);
  weight=random(400,1500);

  speed=random(223,321);
  weight=random(30,52);

  wall=createSprite(1200,200,thickness,height/2);
  bullet=createSprite(50, 200, 50, 50);
  wall.shapeColor=("green");
}

function draw() {
  background("black");  
  drawSprites();

bullet.velocityX=speed;
bullet.collide(wall);

  if(bullet.x>1200&&collide==1){

  if(0.5*weight*speed*speed<10){
    wall.shapeColor=("green");
  }
  if(0.5*weight*speed*speed==10 || 0.5*weight*speed*speed>10){
    wall.shapeColor=("red");
  }
//speed=0;
collide=0;
}
}