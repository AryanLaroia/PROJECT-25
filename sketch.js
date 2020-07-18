
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var left, base, right;
var ball;
//var xyz;
var hello;
var anim;

function preload(){

	hello  = loadImage("dustbin.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	anim = createSprite(670,530,2,2);
	anim.addImage(hello);
	anim.scale = 0.3;
	

	ground = new Ground(400,650,800,20);
	base = new Collector(650,620,250,20);
	left = new Collector(555,590,20,80);
	right = new Collector(775,590,20,80);
	ball = new Ball(100,430,100);

	//xyz = Bodies.rectangle(650,530,250,200, {isStatic : true});
	//World.add(world,xyz);
  
	
}


function draw() {
  
  background("white");
  
   // text(mouseX + ";" + mouseY,200,20);
	Engine.update(engine);

	
	
	
	ground.display();
	base.display();
	left.display();
	right.display();
  ball.display();

 // image(hello,xyz.position.x,xyz.position.y,250,200);
  
 drawSprites();
 
  
 
}


function keyPressed(){
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball.body, ball.body.position,{ x : 115, y : - 115});
	
	
}}