const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var box;
var plane;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    var ball_options ={
        restitution: 1,
        friction : 0.8
    }

    var plane_options ={
        restitution: 0.9,
        friction: 0.8
    }

    ground = Bodies.rectangle(200,390,400,20,ground_options);
    World.add(world,ground);

    box = Bodies.rectangle(200,0,40,30,ball_options);
    World.add(world,box);
    
    plane = Bodies.rectangle(140,50,30,20,plane_options);
    World.add(world,plane);

    console.log(ground);
    console.log(box);


}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    fill("yellow");
    rect(box.position.x, box.position.y,40,30);
    fill("green");
    rect(plane.position.x, plane.position.y, 30,20);
}