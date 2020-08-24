const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var ground1;
var pig1;
var log1;
var pig2;
var box3;
var box4;
var log2;
var box5;
var log3, log4;
var bird;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(730,330,80,80);
    box2 = new Box(890, 330, 80, 80);
    ground1 = new Ground(600, 370, 1200, 20);
    pig1 = new Pig(810, 350);
    log1 = new Log(810, 290, 240, PI/2);
    pig2 = new Pig(810, 255);
    box3 = new Box(730, 240, 80, 80);
    box4 = new Box(890, 240, 80, 80);
    log2 = new Log(810, 190, 240, PI/2);
    box5 = new Box(810, 150, 80, 80);
    log3 = new Log(760, 100, 180, PI/5);
    log4 = new Log(860, 100, 180, -PI/5);
    bird = new Bird(200, 200);

}

function draw(){
    background(0);
    Engine.update(engine);

    //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    console.log(box2.body.angle);

    box1.display();
    box2.display();
    ground1.display();
    pig1.display();
    log1.display();
    pig2.display();
    box3.display();
    box4.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird.display();
   
}