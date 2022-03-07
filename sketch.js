
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var paredin;
var bloco;

	


function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
	var ball_options = {
		restitution : 0.95,
		frictionAir : 0.01
	  };
	
	  var ground_options = {
		isStatic : true
	  };
	
	  var paredin_options = {
		isStatic : true
	  };
var bloco_options = {
	restitution : 0.50,
	frictionAir : 1
}
ball = Bodies.circle(100,10,20,ball_options);
	  World.add(world,ball);

	  ground = Bodies.rectangle(200,390,400,20,ground_options);
	  World.add(world,ground);

	  paredin = Bodies.rectangle(300,150,70,10,paredin_options);
	  World.add(world,paredin);
	  rectMode(CENTER);
	  ellipseMode(RADIUS);
	  bloco = Bodies.rectangle(200,200,70,70,bloco_options);
	  World.add(world,bloco);
	  rectMode(CENTER);
	  ellipseMode(RADIUS);
	Engine.run(engine);
  
}


function draw() {
	background(30);
	Engine.update(engine);

	ellipse(ball.position.x,ball.position.y,20);
	rect(ground.position.x,ground.position.y,400,20);
	rect(bloco.position.x,bloco.position.y,70,70);
	rect(paredin.position.x,paredin.position.y,70,10)
  
  
  drawSprites();
 
}



