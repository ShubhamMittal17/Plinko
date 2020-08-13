const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;
var world;
function setup() {
  createCanvas(480,800);
  rectMode(CENTER);

  engine = Engine.create();
	world = engine.world;
  
  for(var k=0;k<=innerWidth;k=k+80){
    divisions.push(new division(k,height-divisionHeight/2,10,divisionHeight));
  }
  land=new ground(width/2,800,width,10);
  for(var j=40;j<=width;j=j+50){
    plinkos.push(new plinko(j,40,10));
  }
  for(var j=15;j<=width-10;j=j+50)
  {
    plinkos.push(new plinko(j,90,10));
  }
  for(var j=40;j<=width;j=j+50){
    plinkos.push(new plinko(j,140,10));
  }
  for(var j=15;j<=width-10;j=j+50)
  {
    plinkos.push(new plinko(j,190,10));
  }
  //if(frameCount%60===0){
    //particles.push(new particle(random(width/2-10,width/2+10),10,10));
  //}
  for(var j=40;j<=width;j=j+50){
    plinkos.push(new plinko(j,240,10));
  }
  for(var j=15;j<=width-10;j=j+50)
  {
    plinkos.push(new plinko(j,290,10));
  }
  for(var j=40;j<=width;j=j+50){
    plinkos.push(new plinko(j,340,10));
  }
  for(var j=15;j<=width-10;j=j+50)
  {
    plinkos.push(new plinko(j,390,10));
  }
  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("darkslategrey"); 
  textSize(30);
  fill("red")
  text("RIGHT CLICK FOR BALLS",60,450);
for(var k=0;k<divisions.length;k++){
  divisions[k].display();
}
for(var j=0;j<plinkos.length;j++){
  plinkos[j].display();
}
for(var l=0;l<particles.length;l++){
  particles[l].display();
}
land.display();
  drawSprites();
}
function mouseReleased(){
  particles.push(new particle(random(width/2-10,width/2+10),10,10));
}