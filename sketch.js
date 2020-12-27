const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var engine,world

function setup(){

createCanvas(3000,800)

engine = Engine.create();
world = engine.world;


fill("brown")
ground=new Ground(1500,780,3000,10)


fill("yellow")
box1=new Box(600,740,70,70)
box2=new Box(600,740,70,70)
box3=new Box(600,740,70,70)
box4=new Box(600,740,70,70)
box5=new Box(600,740,70,70)
box6=new Box(600,740,70,70)
box7=new Box(600,740,70,70)

box8=new Box(700,740,70,70)
box9=new Box(700,740,70,70)
box10=new Box(700,740,70,70)
box11=new Box(700,740,70,70)
box12=new Box(700,740,70,70)

ball=new Ball(400,500,50)


slingshot=new Sling(ball.body,{x:400,y:200})

}

function draw(){

background("white")
Engine.update(engine) 
rectMode(CENTER)
fill("black")
text (mouseX+ "," +mouseY,mouseX,mouseY)

ground.display()

fill("lightBlue")
box1.display()
box2.display()
box3.display()
box4.display()
box5.display()
box6.display()
box7.display()
fill("pink")
box8.display()  
box9.display()
box10.display()
box11.display()
box12.display()

ball.display()
slingshot.display()
}

//making functions
function mouseDragged(){

Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})

}
