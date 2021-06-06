const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var boy;

var engine, world, boyImage;
var backgroundImage;

var snowParticles = [];

function preload() {

    boyImage = loadImage("boy.png");
    backgroundImage = loadImage("snow1.jpg");
}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;


  boy = createSprite(100, 300, 50, 50);
  boy.addImage(boyImage);
  boy.scale = 0.8;
}

function draw() {
  background(backgroundImage);  

  Engine.update(engine);


  if(frameCount % 60 === 0){
    snowParticles.push(new Snow(random(0, 500), 10, 10));
  }

  for (var j = 0; j < snowParticles.length; j++) {
    snowParticles[j].display();
  }

  drawSprites();
}


function keyPressed(){
  if(keyCode === 39){
      boy.x = boy.x + 10;
  }
  
  if(keyCode === 37){
    boy.x = boy.x -10;
  }
}
