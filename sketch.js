
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1,bob2,bob3,bob4
var roof1
var rope1


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new bob(340,400,50)
	bob2 = new bob(390,400,50)
	bob3 = new bob(440,400,50)
	bob4 = new bob(490,400,50)
	roof1 = new roof(425,250,400,10)
	rope1 = new rope(bobObject1.body,roofObject.body,-bobDiameter*2,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display()
  bob2.display();
  bob3.display()
  bob4.display()
  roof1.display();
  rope1.display();
  drawSprites();
 
}



