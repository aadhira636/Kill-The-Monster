const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2,box3,box4,box5,box6,box7,box8,box9,box10;
var box11, box12,box13,box14,box15,box16,box17,box18,box19,box20;
var box21,box22,box23,box24;
var ball;
var backgroundImg,platform;
var bird, sling1;
var score = 0;
var gameState = "onSling";
var bg;
var slingDrag = 0;
var enemy;

function preload()
{
    backgroundImg = loadImage("GamingBackground.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    enemy = new Enemy(900,300,150,150);

    ground = new Ground(600,height,1200,20);

    box1 = new Box(600,380,50,50);
    box2 = new Box(650,380,50,50);
    box3 = new Box(700,380,50,50);
    box4 = new Box(750,380,50,50);
    box5 = new Box(800,380,50,50);
    box6 = new Box(650,360,50,50);
    box7 = new Box(700,360,50,50);
    box8 = new Box(750,360,50,50);
    box9 = new Box(700,340,50,50);
   //box10 = new Box(600,320,50,50);
   //box11 = new Box(650,320,50,50);
   //box12 = new Box(700,320,50,50);
   box13 = new Box(200,380,50,50);
   box14 = new Box(200,360,50,50);
   box15 = new Box(200,340,50,50);
   box16 = new Box(200,320,50,50);
   box17 = new Box(300,380,50,50);
   box18 = new Box(300,360,50,50);
   box19 = new Box(300,340,50,50);
   box20 = new Box(300,320,50,50);
   box21 = new Box(250,380,50,50);
   box22 = new Box(250,360,50,50);
   box23 = new Box(250,340,50,50);
   box24 = new Box(250,320,50,50);

   ball = new Ball(450,350,250,120);

   sling1 = new SlingShot(ball.body,{x : 450,y : 50});

}

function draw()
{
    background(backgroundImg);
    Engine.update(engine);
    fill("brown");
    ground.display();
    fill("green");
    box1.display();
    fill("blue");
    box2.display();
    fill("orange");
    box3.display();
    fill("yellow");
    box4.display();
    fill("red");
    box5.display();
    fill("pink");
    box6.display();
    fill("cyan");
    box7.display();
    fill("purple");
    box8.display();
    fill("tomato");
    box9.display();
    fill("magenta");
    //box10.display();
    ball.display();
    sling1.display();
    fill("brown");
    ground.display();
    fill("green");
    //box11.display();
    fill("blue");
    //box12.display();
    fill("orange");
    box13.display();
    fill("yellow");
    box14.display();
    fill("red");
    box15.display();
    fill("pink");
    box16.display();
    fill("cyan");
    box17.display();
    fill("purple");
    box18.display();
    fill("tomato");
    box19.display();
    fill("magenta");
    box20.display();
    fill("green");
    box21.display();
    fill("blue");
    box22.display();
    fill("orange");
    box23.display();
    fill("yellow");
    box24.display();
    enemy.display();
    

}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    }
