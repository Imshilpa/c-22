const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground,ball;




function setup() {
  createCanvas(800,400);
  //to create the engine
  engine= Engine.create();
  //to attach the canvas or world with the engine
  world=engine.world;

  var ground_options={
    isStatic :true,
  }
 ground= Bodies.rectangle(200,380,800,20,ground_options);
 World.add(world,ground);

 var ball_options={
  restitution: 1.0,
}
ball= Bodies.circle(300,300,30,ball_options);
World.add(world,ball);
 
}

function draw() {
  background(255); 
  Engine.update(engine);
  fill ("green");
  rectMode(CENTER);
    rect(ground.position.x,ground.position.y,800,20); 
    fill ("red");
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,30,30);
  drawSprites();
}