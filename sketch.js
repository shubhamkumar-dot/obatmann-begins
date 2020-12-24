const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var maxDrops = 100;

var umbrella;

var drops;

function preload(){
    umbrella = new Umbrella();
}

function setup(){
   createCanvas(400,700);
   engine = Engine.create();
   world = engine.world;

}

function draw(){
    background("black");
    Engine.update(engine);

for(i = 0;i<maxDrops;i++){
    drops.push(new Drop(random(0,400),random(0,400)));
}

drops.update();
drops.display();

umbrella.display();

    drawSprites();
}   

