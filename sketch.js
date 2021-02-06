const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine,world,ground;


function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(600,395,1200,20);

  box1 = new Box(800,100,60,60);
  box2 = new Box(800,100,60,60);
  box3 = new Box(800,100,60,60);
  box4 = new Box(800,100,60,60);
  box5 = new Box(800,100,60,60);
  box6 = new Box(800,100,60,60);
  
  ball = new Ball(200,200,40);

  string = new String(ball.body,{x:600,y:100});
}

  
function draw() {

  

  
  background(34,67,85);  
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  ball.display();
  string.display();
  
  
}
  

function mouseDragged(){
   Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  
