var paperBall;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	var ball_options={
		isStatic: false,
		restitution:0.3,
		friction:0, 
		density:1.2
	}
	paperBall = Bodies.circle(150,200,30,ball_options);
	ground = new Wall(400, 360, 800, 20)
	Engine.run(engine);
    World.add(world,paperBall)
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ellipse(paperBall.position.x, paperBall.position.y, 30)
  ellipseMode(RADIUS);
 
  ground.show();
  keyPressed();
  drawSprites();
  
}

function keyPressed(){
	if(keyCode === RIGHT_ARROW){
	  Matter.Body.applyForce(paperBall,{x: 0,y: 0},{x:0.05,y: 0})
	}
  }

