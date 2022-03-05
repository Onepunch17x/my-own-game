
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var hoop1, hoop2;
var score = 0;
var balls = []

var ball_options = {
  restitution: 1,
  frictionAir:0.01
}

function setup() {
  createCanvas(600,400);

  engine = Engine.create();
  world = engine.world;
  
   
   
   var ground_options ={
     isStatic: true
   };
  

  ground = Bodies.rectangle(300,390,600,20,ground_options);
  World.add(world,ground);

  hoop1 = Bodies.rectangle(490, 350,350,250, ground_options )
  World.add(world,hoop1)
  hoop2= Bodies.rectangle(590,350,350,250,ground_options)
  World.add(world,hoop2);

  for(var i=0; i<4;i=i+1){ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);}
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  
  textSize(20)
  fill("white")
  text ("Score: "+score, 100,100)
  Engine.update(engine);
  
  if(ball!=null){
    if(ball.position.x>490&& ball.position.x<550){
      score=score+1;
      
        callBall();
        
      
      
      World.remove(world,ball)
      ball=null;
    }
  }
  
  
  if(ball!=null){
    ellipse(ball.position.x,ball.position.y,20);
  }
  
  rect(ground.position.x,ground.position.y,600,20);
  rect(hoop1.position.x,hoop1.position.y,20,350)
  rect(hoop2.position.x,hoop2.position.y,20,350)
 
}
function keyPressed(){
  if(keyCode==32){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0.033,y:-0.04})
  }
}
function keyReleased(){
  if(keyCode==32){
    balls[balls.length-1]
  }
}
function createBall(){
  ball = Bodies.circle(100,10,20,ball_options);
      World.add(world,ball);
}
function callBall(){
  if (balls.length > 0) {
    if (
      balls.length < 4 &&
      balls[balls.length - 1].body.position.x < width - 300
    ) {
     createBall();
  
      balls.push(ball);
    }
  }
}


