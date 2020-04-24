
var wall;
var wallthickness=60
var bullet;
var bulletspeed=223
var bulletweight=40


function setup(){
  createCanvas(1600,400);
  
  wall=createSprite(1560,200,60,400);
  wall.shapeColor=color(80,80,80);
  bullet=createSprite(200,200,20,10);
  bullet.shapeColor="white";
  bullet.velocityX=2;
}
function draw(){
  background(0);
  
  bullet.collide(wall,calculateDamage)
  drawSprites();
}


function calculateDamage() { 
  var damage=0.5 * bulletweight * bulletspeed* bulletspeed/wallthickness*wallthickness*wallthickness;
  
  if (damage>10){
    wall.shapeColor="red";
  }
  else{
    wall.shapeColor="green";
  }
}
  


