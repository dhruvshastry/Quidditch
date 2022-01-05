const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var bg;
var engine;
var world;

var playerImg, player;

var goalKImg, goalK

var edge1, edge2, edge3;

var goalImg, goal;

var quaffleImg1, quaffle, quaffleImg2;

var score;









function preload(){
  bg = loadImage("HpBg3.png")
  playerImg = loadAnimation("HPB2.png","HPB3.png")
  goalKImg = loadAnimation("HPB4.png","HPB5.png")
  goalImg = loadImage("GoalPost.png")
  quaffleImg1 = loadAnimation("Quaffle.png","Quaffle2.png","Quaffle3.png")


}


function setup() {
  createCanvas(windowWidth, windowHeight);

   score=0


  player = createSprite(windowWidth/2+400,windowHeight/2)
  player.addAnimation("player",playerImg);
  player.scale = 1.5

  goalK = createSprite(400,windowHeight/2)
  goalK.addAnimation("goalK",goalKImg)
  goalK.velocityY = 4

  edge1 = createSprite(windowWidth/2,10,windowWidth,10)
  edge1.visible = true

  edge2 = createSprite(windowWidth/2,windowHeight-10,windowWidth,10)
  edge2.visible = true

  edge3 = createSprite(1,windowHeight/2,10, windowHeight)
  edge3.visible = true

  goal = createSprite(130,windowHeight/2+100)
  goal.addImage("goal",goalImg)
  goal.scale = 0.8

  quaffle = createSprite(player.position.x-90,player.position.y-25)
  quaffle.addAnimation("quaffle",quaffleImg1)
  quaffle.scale = 0.1


  goal.setCollider("rectangle",-90,0, 200,700)

  
}

function draw() {
  background(bg); 

  textSize(30);
  text("score:"+score,300,40);



  goalK.bounceOff(edge1)
  goalK.bounceOff(edge2)
   
  if(quaffle.isTouching(edge3)){
    quaffle.velocityX = 0
  }


  if(goalK.isTouching(edge2)){
    goalK.velocityY = -4
  }

  if(goalK.isTouching(edge1)){
    goalK.velocityY = 4
  }

  
  if(keyDown("UP_ARROW")){
    player.y+=-10
    quaffle.y+=-10
  }
  if(keyDown("DOWN_ARROW")){
    player.y+=10
    quaffle.y+=10
  }
  if(keyDown("LEFT_ARROW")){
    player.x+=-10
    quaffle.x+=-10
  }
  if(keyDown("RIGHT_ARROW")){
    player.x+=10
    quaffle.x+=10
  }

  if(keyDown("SPACE")){
    quaffle.velocityX = -8

  }

if(quaffle.isTouching(goal)){
  quaffle.velocityX = 0
  score = score+1
  quaffle.position.x = player.position.x-90
  quaffle.position.Y = player.position.y-25
}
  
  drawSprites();




}