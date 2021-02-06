const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground();
    ball1= new Ball(200,200,20);
    ball2= new Ball(300, 150, 50);
    ball3= new Ball(100,100,10);
    box1 = new Box(200,100,50,50);
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    ball1.display();
    ball2.display();
    ball3.display();
    box1.display();
  }