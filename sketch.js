 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var dustBottom, dustLeft, dustRight;
var ground;

/*function preload()
{
	
}*/

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(50, 550, 20);

	dustBottom = new Dustbin(1350, 630, 200, 20);
	dustLeft = new Dustbin(1260, 590, 20, 100);
	dustRight = new Dustbin(1440, 590, 20, 100);

	ground = new Ground(750, 645, 1500, 30);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  keyPressed();
  
	paper.display();
	dustRight.display();
	dustLeft.display();
	dustBottom.display();

	ground.display();

  drawSprites();
 
}

function keyPressed(){

	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:1.5, y:-5});
	}
}



