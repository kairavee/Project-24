
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,dustbin1,dustbin2,dustbin3;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(700, 600);

	groundSprite=createSprite(300, 300, 800,10);
	groundSprite.shapeColor=("yellow")

	engine = Engine.create();
	world = engine.world;

	ground = Bodies.rectangle(100, 100, 700, 10 , {isStatic:true} );
     World.add(world, ground);


	//Create the Bodies Here
	paper=new Paper(50,790)

	Engine.run(engine);
  
    dustbin1=new Box(329,648,20,80);
	dustbin2=new Box(450,648,200,20);
	dustbin3=new Box(519,648,20,80);

}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display()
  dustbin1.display()
  dustbin2.display()
  dustbin3.display()

  drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW) 
	{
	   Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
   }