
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 200);


	engine = Engine.create();
	world = engine.world;

	


	Engine.run(engine);

	dustwall1= new Dustbin(1000,150,200,20);
    dustwall2= new Dustbin(1100,100,20,100);
	dustwall3= new Dustbin(900,100,20,100);
	paperObject= new paperBall(100,20,30,30);
	ground1= new Ground(600,170,1200,20);
}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();
  dustwall1.display();
  dustwall2.display();
  dustwall3.display();
 paperObject.display();
 ground1.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paperObject.body,paperObject.body.positon,{x:25,y:-25});
	   
   }
   }

