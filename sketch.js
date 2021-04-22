
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var ground;
var line1,line2,line3;
var ball;
var world;

function preload()
{
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	line1=new Dustbin(1100,620,20,100);
	line2=new Dustbin(1300,620,20,100);
    line3=new Dustbin(1200,650,200,20); 

	ball=new Paper(200,450,40);

	ground = new Ground(width/2,670,width,20);

	var render = Render.create({ 
		element: document.body,
		 engine: engine,
		  options: { 
			  width: 1600,
			   height: 700,
			    wireframes: false
			 } 
			});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
line1.display();
line2.display();
line3.display();
ball.display();
ground.display();

 
}
function keyPressed(){
if(keyCode===UP_ARROW){
	Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85})
}
}



