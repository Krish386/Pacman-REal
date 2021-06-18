const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var line,line1,line2,line4,line5,line6,line7,line8,line9,line10

var score=0

var lives=2


function preload() {

  
 pacmanIMG=loadImage("pacman.png")

 ghostIMG=loadImage("ghost.png")

 restartIMG=loadImage("refresh.png")



}

function setup(){
    var canvas = createCanvas(700,700);
    engine = Engine.create();
    world = engine.world;
   


    line=createSprite(360,15,700,50);
    line1=createSprite(15,350,50,700);
    line2=createSprite(680,355,50,700);
    line3=createSprite(350,680,700,50);

  //.........................................  1st layer

    line4=createSprite(350,310,220,12);
    line5=createSprite(350,390,220,12);

 //......................................... 2nd layer

 line6=createSprite(150,245,10,80);
 line7=createSprite(185,205,80,10);

 line8=createSprite(550,245,10,80);
 line9=createSprite(515,205,80,10);
 
 line10=createSprite(150,480,10,80);
 line11=createSprite(185,520,80,10);
 
 line12=createSprite(550,480,10,80);
 line13=createSprite(515,520,80,10);;


      //......................................... 3rd layer


  line14=createSprite(550,350,50,10);
  
             
  line15=createSprite(150,350,50,10);
 
      
  line16=createSprite(350,495,10,70);

  line17=createSprite(350,200,10,70);

  //................................ Pacman

  pacman=createSprite(350,350,20,20)

  pacman.addImage("pacmanIMG",pacmanIMG)

  button=createSprite(100,100,20,20)

  button.addImage("buttonIMG",restartIMG)




    //................................ Dots


dot1=createSprite(400,350,10,10)
dot2=createSprite(300,350,10,10)
dot3=createSprite(400,350,10,10)
dot4=createSprite(425,350,10,10)
dot5=createSprite(450,350,10,10)
dot6=createSprite(475,350,10,10)
dot7=createSprite(500,350,10,10)
dot8=createSprite(275,350,10,10)
dot9=createSprite(250,350,10,10)
dot10=createSprite(225,350,10,10)
dot11=createSprite(200,350,10,10)



dot12=createSprite(300,275,10,10)
dot13=createSprite(400,275,10,10)
dot14=createSprite(425,275,10,10)
dot15=createSprite(450,275,10,10)
dot16=createSprite(475,275,10,10)
dot17=createSprite(500,27510,10)
dot18=createSprite(275,275,10,10)
dot19=createSprite(250,275,10,10)
dot20=createSprite(225,275,10,10)
dot21=createSprite(200,275,10,10)
dot22=createSprite(400,275,10,10)
dot23=createSprite(350,275,10,10)
dot24=createSprite(325,275,10,10)
dot25=createSprite(375,275,10,10)
dot26=createSprite(500,275,10,10)


dot27=createSprite(300,420,10,10)
dot28=createSprite(400,420,10,10)
dot29=createSprite(425,420,10,10)
dot30=createSprite(450,420,10,10)
dot31=createSprite(475,420,10,10)
dot32=createSprite(500,420,10,10)
dot33=createSprite(275,420,10,10)
dot34=createSprite(250,420,10,10)
dot35=createSprite(225,420,10,10)
dot36=createSprite(200,420,10,10)
dot37=createSprite(400,420,10,10)
dot38=createSprite(350,420,10,10)
dot39=createSprite(325,420,10,10)
dot40=createSprite(375,420,10,10)
dot41=createSprite(500,420,10,10)

dot42=createSprite(500,397,10,10)
dot43=createSprite(500,377,10,10)

dot44=createSprite(200,397,10,10)
dot45=createSprite(200,377,10,10)

dot46=createSprite(200,297,10,10)
dot47=createSprite(200,320,10,10)

dot84=createSprite(500,297,10,10)
dot90=createSprite(500,320,10,10)

dot48=createSprite(150,320,10,10)
dot49=createSprite(125,320,10,10)
dot50=createSprite(100,320,10,10)
dot51=createSprite(175,320,10,10)

dot52=createSprite(150,375,10,10)
dot53=createSprite(125,375,10,10)
dot54=createSprite(100,375,10,10)
dot55=createSprite(175,375,10,10)

dot56=createSprite(100,350,10,10)

//.....................


dot57=createSprite(600,320,10,10)
dot58=createSprite(550,320,10,10)
dot59=createSprite(575,320,10,10)
dot60=createSprite(525,320,10,10)

dot61=createSprite(600,375,10,10)
dot62=createSprite(550,375,10,10)
dot63=createSprite(575,375,10,10)
dot64=createSprite(525,375,10,10)

dot65=createSprite(600,350,10,10)

//........................

dot66=createSprite(325,485,10,10)
dot67=createSprite(325,510,10,10)
dot68=createSprite(325,535,10,10)
dot69=createSprite(325,563,10,10)
dot70=createSprite(325,460,10,10)
dot71=createSprite(325,440,10,10)


dot72=createSprite(375,485,10,10)
dot73=createSprite(375,510,10,10)
dot74=createSprite(375,535,10,10)
dot75=createSprite(375,563,10,10)
dot76=createSprite(375,460,10,10)
dot77=createSprite(375,440,10,10)

dot78=createSprite(350,563,10,10)

//........................

dot79=createSprite(325,250,10,10)
dot80=createSprite(325,225,10,10)
dot81=createSprite(325,200,10,10)
dot82=createSprite(325,175,10,10)
dot83=createSprite(325,150,10,10)

dot85=createSprite(375,250,10,10)
dot86=createSprite(375,225,10,10)
dot87=createSprite(375,200,10,10)
dot88=createSprite(375,175,10,10)
dot89=createSprite(375,150,10,10)


dot91=createSprite(350,150,10,10)


//......................


ghost=createSprite(100,200,20,20)

ghost1=createSprite(600,520,20,20)

ghost.addImage("ghostIMG",ghostIMG)

ghost1.addImage("ghostIMG",ghostIMG)







dot1.shapeColor=("blue")
dot2.shapeColor=("blue")
dot3.shapeColor=("blue")
dot4.shapeColor=("blue")
dot5.shapeColor=("blue")
dot6.shapeColor=("blue")
dot7.shapeColor=("blue")
dot8.shapeColor=("blue")
dot9.shapeColor=("blue")
dot10.shapeColor=("blue")
dot11.shapeColor=("blue")
dot12.shapeColor=("blue")
dot13.shapeColor=("blue")
dot14.shapeColor=("blue")
dot15.shapeColor=("blue")
dot16.shapeColor=("blue")
dot17.shapeColor=("blue")
dot18.shapeColor=("blue")
dot19.shapeColor=("blue")
dot20.shapeColor=("blue")
dot21.shapeColor=("blue")
dot22.shapeColor=("blue")
dot23.shapeColor=("blue")
dot24.shapeColor=("blue")
dot25.shapeColor=("blue")
dot26.shapeColor=("blue")
dot27.shapeColor=("blue")
dot28.shapeColor=("blue")
dot29.shapeColor=("blue")
dot30.shapeColor=("blue")
dot31.shapeColor=("blue")
dot32.shapeColor=("blue")
dot33.shapeColor=("blue")
dot34.shapeColor=("blue")
dot35.shapeColor=("blue")
dot36.shapeColor=("blue")
dot37.shapeColor=("blue")
dot38.shapeColor=("blue")
dot39.shapeColor=("blue")
dot40.shapeColor=("blue")
dot41.shapeColor=("blue")
dot42.shapeColor=("blue")
dot43.shapeColor=("blue")
dot44.shapeColor=("blue")
dot45.shapeColor=("blue")
dot46.shapeColor=("blue")
dot47.shapeColor=("blue")
dot48.shapeColor=("blue")
dot49.shapeColor=("blue")
dot50.shapeColor=("blue")
dot51.shapeColor=("blue")
dot52.shapeColor=("blue")
dot53.shapeColor=("blue")
dot54.shapeColor=("blue")
dot55.shapeColor=("blue")
dot56.shapeColor=("blue")
dot57.shapeColor=("blue")
dot58.shapeColor=("blue")
dot59.shapeColor=("blue")
dot60.shapeColor=("blue")
dot61.shapeColor=("blue")
dot62.shapeColor=("blue")
dot63.shapeColor=("blue")
dot64.shapeColor=("blue")
dot65.shapeColor=("blue")
dot66.shapeColor=("blue")
dot67.shapeColor=("blue")
dot68.shapeColor=("blue")
dot69.shapeColor=("blue")
dot70.shapeColor=("blue")
dot71.shapeColor=("blue")
dot72.shapeColor=("blue")
dot73.shapeColor=("blue")
dot74.shapeColor=("blue")
dot75.shapeColor=("blue")
dot76.shapeColor=("blue")
dot77.shapeColor=("blue")
dot78.shapeColor=("blue")
dot59.shapeColor=("blue")
dot60.shapeColor=("blue")
dot61.shapeColor=("blue")
dot62.shapeColor=("blue")
dot63.shapeColor=("blue")
dot64.shapeColor=("blue")
dot65.shapeColor=("blue")
dot66.shapeColor=("blue")
dot67.shapeColor=("blue")
dot68.shapeColor=("blue")
dot69.shapeColor=("blue")
dot70.shapeColor=("blue")
dot71.shapeColor=("blue")
dot72.shapeColor=("blue")
dot73.shapeColor=("blue")
dot74.shapeColor=("blue")
dot75.shapeColor=("blue")
dot76.shapeColor=("blue")
dot77.shapeColor=("blue")
dot78.shapeColor=("blue")
dot79.shapeColor=("blue")
dot80.shapeColor=("blue")
dot81.shapeColor=("blue")
dot82.shapeColor=("blue")
dot83.shapeColor=("blue")
dot84.shapeColor=("blue")
dot85.shapeColor=("blue")
dot86.shapeColor=("blue")
dot87.shapeColor=("blue")
dot88.shapeColor=("blue")
dot89.shapeColor=("blue")
dot90.shapeColor=("blue")
dot91.shapeColor=("blue")

//.....

line.shapeColor=("yellow")
line1.shapeColor=("yellow")
line2.shapeColor=("yellow")
line3.shapeColor=("yellow")
line4.shapeColor=("red")
line5.shapeColor=("red")
line6.shapeColor=("red")
line7.shapeColor=("red")
line8.shapeColor=("red")
line9.shapeColor=("red")
line10.shapeColor=("red")
line11.shapeColor=("red")
line12.shapeColor=("red")
line13.shapeColor=("red")
line14.shapeColor=("red")
line15.shapeColor=("red")
line16.shapeColor=("red")
line17.shapeColor=("red")





















 

ghost.velocityX=3.5
ghost.velocityY=3.5

ghost1.velocityX=3.5
ghost1.velocityY=3.5


        
 
      
      
      

 
  

}

function draw(){
    
    background("black")
    
    Engine.update(engine);


    textSize(25)
    fill("blue")
    text("Score:"+score,530,100)

    
  

    drawSprites();


    
    if(lives==1)
{

 pacman=createSprite(350,350,20,20)

  pacman.addImage("pacmanIMG",pacmanIMG)

  lives=lives-1

}

if(lives==-1)
{
  background("black")

  textSize(50)
  fill("blue")
  text("Game Over!",225,350)
  
  // button=createSprite(150,150,20,20)

 //  button.addImage("buttonIMG",restartIMG)


}

if(score==90)
{
  background("black")

  textSize(50)
  fill("blue")
  text("You Won!",225,350)

}

    if(keyIsDown(RIGHT_ARROW) ){
      pacman.x +=10
   /*   if(score%15==0)
      {
        pacman.x=pacman.x+5
   }   */ 
  
    }

    if(keyIsDown(LEFT_ARROW) ){
      pacman.x +=-10
   /*       if(score%15==0)
        {
        pacman.x=pacman.x+5
      }   */ 
  
  
    }

    
    if(keyIsDown(UP_ARROW) ){
      pacman.y +=-10
      /*  if(score%15==0)
        {
        pacman.y=pacman.y+5
      }   */ 
  
  
    }

    
    if(keyIsDown(DOWN_ARROW) ){
      pacman.y +=10
     /*   if(score%15==0)
      {
        pacman.y=pacman.y+5
      }   */ 
    }

  if(mousePressedOver(button))
  {
    location.reload();
  }

 pacman.bounceOff(line)
 pacman.bounceOff(line1)
 pacman.bounceOff(line2)
 pacman.bounceOff(line3)
 pacman.bounceOff(line4)
 pacman.bounceOff(line5)
 pacman.bounceOff(line6)
 pacman.bounceOff(line7)
 pacman.bounceOff(line8)
 pacman.bounceOff(line9)
 pacman.bounceOff(line10)
 pacman.bounceOff(line11)
 pacman.bounceOff(line12)
 pacman.bounceOff(line13)
 pacman.bounceOff(line14)
 pacman.bounceOff(line15)
 pacman.bounceOff(line16)
 pacman.bounceOff(line17)

 ghost.bounceOff(line)
 ghost.bounceOff(line1)
 ghost.bounceOff(line2)
 ghost.bounceOff(line3)
 ghost.bounceOff(line4)
 ghost.bounceOff(line5)
 ghost.bounceOff(line6)
 ghost.bounceOff(line7)
 ghost.bounceOff(line8)
 ghost.bounceOff(line9)
 ghost.bounceOff(line10)
 ghost.bounceOff(line11)
 ghost.bounceOff(line12)
 ghost.bounceOff(line13)
 ghost.bounceOff(line14)
 ghost.bounceOff(line15)
 ghost.bounceOff(line16)
 ghost.bounceOff(line17)
 
 ghost1.bounceOff(line)
 ghost1.bounceOff(line1)
 ghost1.bounceOff(line2)
 ghost1.bounceOff(line3)
 ghost1.bounceOff(line4)
 ghost1.bounceOff(line5)
 ghost1.bounceOff(line6)
 ghost1.bounceOff(line7)
 ghost1.bounceOff(line8)
 ghost1.bounceOff(line9)
 ghost1.bounceOff(line10)
 ghost1.bounceOff(line11)
 ghost1.bounceOff(line12)
 ghost1.bounceOff(line13)
 ghost1.bounceOff(line14)
 ghost1.bounceOff(line15)
 ghost1.bounceOff(line16)
 ghost1.bounceOff(line17)


if(ghost.isTouching(pacman))
{
  pacman.destroy();
  score=score+1
  lives=lives-1
}


if(ghost1.isTouching(pacman))
{
  pacman.destroy();
  score=score+1
  lives=lives-1
}


 
if(ghost.isTouching (ghost1))
{
  ghost.bounceOff(ghost1)
  score=score+1
  lives=lives-1
}

//.............................................

if(dot1.isTouching(pacman))
{
  dot1.destroy();
  score=score+1
  
}

if(dot2.isTouching(pacman))
{
  dot2.destroy();
  score=score+1
}

if(dot3.isTouching(pacman))
{
  dot3.destroy();
  score=score+1
}

if(dot4.isTouching(pacman))
{
  dot4.destroy();
  score=score+1
  
}

if(dot5.isTouching(pacman))
{
  dot5.destroy();
  score=score+1
}

if(dot6.isTouching(pacman))
{
  dot6.destroy();
  score=score+1
}

if(dot7.isTouching(pacman))
{
  dot7.destroy();
  score=score+1


}

if(dot8.isTouching(pacman))
{
  dot8.destroy();
  score=score+1
}

if(dot9.isTouching(pacman))
{
  dot9.destroy();
  score=score+1
}

if(dot10.isTouching(pacman))
{
  dot10.destroy();
  score=score+1
}

if(dot11.isTouching(pacman))
{
  dot11.destroy();
  score=score+1
}

if(dot12.isTouching(pacman))
{
  dot12.destroy();
  score=score+1
}

if(dot13.isTouching(pacman))
{
  dot13.destroy();
  score=score+1
}

if(dot14.isTouching(pacman))
{
  dot14.destroy();
  score=score+1
}

if(dot15.isTouching(pacman))
{
  dot15.destroy();
  score=score+1
}

if(dot16.isTouching(pacman))
{
  dot16.destroy();
  score=score+1
}

if(dot17.isTouching(pacman))
{
  dot17.destroy();
  score=score+1
}

if(dot18.isTouching(pacman))
{
  dot18.destroy();
  score=score+1
}

if(dot19.isTouching(pacman))
{
  dot19.destroy();
  score=score+1
}

if(dot20.isTouching(pacman))
{
  dot20.destroy();
  score=score+1
}

if(dot21.isTouching(pacman))
{
  dot21.destroy();
  score=score+1
}

if(dot22.isTouching(pacman))
{
  dot22.destroy();
  score=score+1
}

if(dot23.isTouching(pacman))
{
  dot23.destroy();
  score=score+1
}

if(dot24.isTouching(pacman))
{
  dot24.destroy();
  score=score+1
}

if(dot25.isTouching(pacman))
{
  dot25.destroy();
  score=score+1

}

if(dot26.isTouching(pacman))
{
  dot26.destroy();
  score=score+1
}

if(dot27.isTouching(pacman))
{
  dot27.destroy();
  score=score+1
}

if(dot28.isTouching(pacman))
{
  dot28.destroy();
  score=score+1
}

if(dot29.isTouching(pacman))
{
  dot29.destroy();
  score=score+1
}

if(dot30.isTouching(pacman))
{
  dot30.destroy();
  score=score+1
}


if(dot31.isTouching(pacman))
{
  dot31.destroy();
  score=score+1
}


if(dot32.isTouching(pacman))
{
  dot32.destroy();
  score=score+1
}


if(dot33.isTouching(pacman))
{
  dot33.destroy();
  score=score+1
}


if(dot34.isTouching(pacman))
{
  dot34.destroy();
  score=score+1
}


if(dot35.isTouching(pacman))
{
  dot35.destroy();
  score=score+1
}


if(dot36.isTouching(pacman))
{
  dot36.destroy();
  score=score+1
}


if(dot37.isTouching(pacman))
{
  dot37.destroy();
  score=score+1
}


if(dot38.isTouching(pacman))
{
  dot38.destroy();
  score=score+1
}

if(dot39.isTouching(pacman))
{
  dot39.destroy();
  score=score+1
}

if(dot40.isTouching(pacman))
{
  dot40.destroy();
  score=score+1
}

if(dot41.isTouching(pacman))
{
  dot41.destroy();
  score=score+1
}

if(dot42.isTouching(pacman))
{
  dot42.destroy();
  score=score+1
}

if(dot43.isTouching(pacman))
{
  dot43.destroy();
  score=score+1
}

if(dot44.isTouching(pacman))
{
  dot44.destroy();
  score=score+1
}

if(dot45.isTouching(pacman))
{
  dot45.destroy();
  score=score+1
}

if(dot46.isTouching(pacman))
{
  dot46.destroy();
  score=score+1
}

if(dot47.isTouching(pacman))
{
  dot47.destroy();
  score=score+1
}

if(dot48.isTouching(pacman))
{
  dot48.destroy();
  score=score+1
}

if(dot49.isTouching(pacman))
{
  dot49.destroy();
  score=score+1
}

if(dot50.isTouching(pacman))
{
  dot50.destroy();
  score=score+1
}

if(dot51.isTouching(pacman))
{
  dot51.destroy();
  score=score+1
}

if(dot52.isTouching(pacman))
{
  dot52.destroy();
  score=score+1
}

if(dot53.isTouching(pacman))
{
  dot53.destroy();
  score=score+1
}

if(dot54.isTouching(pacman))
{
  dot54.destroy();
  score=score+1
}

if(dot55.isTouching(pacman))
{
  dot55.destroy();
  score=score+1
}

if(dot56.isTouching(pacman))
{
  dot56.destroy();
  score=score+1
}

if(dot57.isTouching(pacman))
{
  dot57.destroy();
  score=score+1
}

if(dot58.isTouching(pacman))
{
  dot58.destroy();
  score=score+1
}

if(dot59.isTouching(pacman))
{
  dot59.destroy();
  score=score+1
}

if(dot60.isTouching(pacman))
{
  dot60.destroy();
  score=score+1
}

if(dot61.isTouching(pacman))
{
  dot61.destroy();
  score=score+1
}


if(dot62.isTouching(pacman))
{
  dot62.destroy();
  score=score+1
}


if(dot63.isTouching(pacman))
{
  dot63.destroy();
  score=score+1
}


if(dot64.isTouching(pacman))
{
  dot64.destroy();
  score=score+1
}


if(dot65.isTouching(pacman))
{
  dot65.destroy();
  score=score+1
}


if(dot66.isTouching(pacman))
{
  dot66.destroy();
  score=score+1
}


if(dot67.isTouching(pacman))
{
  dot67.destroy();
  score=score+1
}


if(dot68.isTouching(pacman))
{
  dot68.destroy();
  score=score+1
}

if(dot69.isTouching(pacman))
{
  dot69.destroy();
  score=score+1
}

if(dot70.isTouching(pacman))
{
  dot70.destroy();
  score=score+1
}

if(dot71.isTouching(pacman))
{
  dot71.destroy();
  score=score+1
}

if(dot72.isTouching(pacman))
{
  dot72.destroy();
  score=score+1
}

if(dot73.isTouching(pacman))
{
  dot73.destroy();
  score=score+1
}

if(dot74.isTouching(pacman))
{
  dot74.destroy();
  score=score+1
}

if(dot75.isTouching(pacman))
{
  dot75.destroy();
  score=score+1
}

if(dot76.isTouching(pacman))
{
  dot76.destroy();
  score=score+1
}

if(dot77.isTouching(pacman))
{
  dot77.destroy();
  score=score+1
}

if(dot78.isTouching(pacman))
{
  dot78.destroy();
  score=score+1
}

if(dot79.isTouching(pacman))
{
  dot79.destroy();
  score=score+1
}

if(dot80.isTouching(pacman))
{
  dot80.destroy();
  score=score+1
}

if(dot81.isTouching(pacman))
{
  dot81.destroy();
  score=score+1
}

if(dot82.isTouching(pacman))
{
  dot82.destroy();
  score=score+1
}

if(dot83.isTouching(pacman))
{
  dot83.destroy();
  score=score+1
}

 if(dot84.isTouching(pacman))
{
  dot84.destroy();
  score=score+1
}

if(dot85.isTouching(pacman))
{
  dot85.destroy();
  score=score+1
}

if(dot86.isTouching(pacman))
{
  dot86.destroy();
  score=score+1
}

if(dot87.isTouching(pacman))
{
  dot87.destroy();
  score=score+1
}

if(dot88.isTouching(pacman))
{
  dot88.destroy();
  score=score+1
}

if(dot89.isTouching(pacman))
{
  dot89.destroy();
  score=score+1
}

 if(dot90.isTouching(pacman))
{
  dot90.destroy();
  score=score+1
}

if(dot91.isTouching(pacman))
{
  dot91.destroy();
  score=score+1
}

}





