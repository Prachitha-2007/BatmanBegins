const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var drop=[]
var maxDrops=100
var man



function preload(){

   

}

function setup(){
    createCanvas(800, 700);

    
	engine = Engine.create();
	world = engine.world;   


 
  if(frameCount % 150 === 0){

    for(var i=0; i<maxDrops; i++){
        drop.push(new Drop(random(0,400), random(0,400)));
    }

}



    
}

function draw(){
    Engine.update(engine)
    background(0);
  
    for(var i = 0; i<maxDrops; i++){
        drop[i].display();
        drop[i].updateY()
        
    }

   

    drawSprites(); 
}