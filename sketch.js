//initialization
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;

var engine,world,canvas
var ball=[];
var z=0;
function setup() {
//canvas
  canvas=createCanvas(480,800);

//engine
  engine=Engine.create();

//world
  world=engine.world;

//first row
  plinko1=new Plinko(10,100,10);
  plinko2=new Plinko(60,100,10);
  plinko3=new Plinko(110,100,10);
  plinko4=new Plinko(160,100,10);
  plinko5=new Plinko(210,100,10);
  plinko6=new Plinko(260,100,10);
  plinko7=new Plinko(310,100,10);
  plinko8=new Plinko(360,100,10);
  plinko9=new Plinko(410,100,10);
  plinko10=new Plinko(460,100,10);

//second row
  plinko11=new Plinko(35,200,10);
  plinko12=new Plinko(85,200,10);
  plinko13=new Plinko(135,200,10);
  plinko14=new Plinko(185,200,10);
  plinko15=new Plinko(235,200,10);
  plinko16=new Plinko(285,200,10);
  plinko17=new Plinko(335,200,10);
  plinko18=new Plinko(385,200,10);
  plinko19=new Plinko(435,200,10);

//third row
  plinko20=new Plinko(10,300,10);
  plinko21=new Plinko(60,300,10);
  plinko22=new Plinko(110,300,10);
  plinko23=new Plinko(160,300,10);
  plinko24=new Plinko(210,300,10);
  plinko25=new Plinko(260,300,10);
  plinko26=new Plinko(310,300,10);
  plinko27=new Plinko(360,300,10);
  plinko28=new Plinko(410,300,10);
  plinko29=new Plinko(460,300,10);

//ground
  ground=new Base(240,800,480,50)

//dividers
  div1=new Base(135,550,10,450);
  div2=new Base(335,550,10,450);
  div3=new Base(0,550,10,880);
  div4=new Base(480,550,10,880);

//balls
  
}

function draw() {
//background
  background(0); 


//updating the engine
  Engine.update(engine);
  //for(i=0;i<=30;i++){
  
  //ball1=new Ball(rand,-250,10); 
  //keyPressed();
  for(i=0;i<ball.length;i++){
    ball[i].display();
  }
  
  //}
  //round.push(ball);

//displaying all bodies(first row)
  plinko1.display();
  plinko2.display();
  plinko3.display();
  plinko4.display();
  plinko5.display();
  plinko6.display();
  plinko7.display();
  plinko8.display();
  plinko9.display();
  plinko10.display();

//displaying all bodies(second row)  
  plinko11.display();
  plinko12.display();
  plinko13.display();
  plinko14.display();
  plinko15.display();
  plinko16.display();
  plinko17.display();
  plinko18.display();
  plinko19.display();

//displaying all bodies(third row)
  plinko20.display();
  plinko21.display();
  plinko22.display();
  plinko23.display();
  plinko24.display();
  plinko25.display();
  plinko26.display();
  plinko27.display();
  plinko28.display();
  plinko29.display();

  ground.display();
  div1.display();
  div2.display();
  div3.display();
  div4.display();
  
  //sensor1.display();
  
//ball display

//text display
  //fill("white");
  //text("100",50,700);
  //text("20",230,700);
  //text("50",335+70,700);
  //text("Your score is"+" "+score,370,10)
}
function keyPressed(){
  if(keyCode==32){
    rand=Math.round(random(100,400));
    ball.push(new Ball(rand,-250,10));
  }  
}
