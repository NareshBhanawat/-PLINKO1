const World = Matter.World
const Engine = Matter.Engine
const Bodies = Matter.Bodies

var engine,world

var d=[]
var divisionsheight=300

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,800);
   ground1 = new ground(250,590,500,10)
   for(var k= 0 ;k<=500;k=k+80){
     d.push(new divisions(k,height-divisionsheight/2,10,divisionsheight))
   }
}

function draw() {
  background("green");
  Engine.update(engine)
   ground1.display();
   for(var k=0;k<d.length;k++){
     d[k].display();
   }

}