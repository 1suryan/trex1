var trex, trexi
var score = 0


function preload () {
trexi = loadAnimation ("trex1.png","trex3.png","trex4.png")
groundi = loadImage ("ground2.png")
cloudi = loadImage("cloud.png")
obstacle1 = loadImage("obstacle1.png")
obstacle2 = loadImage("obstacle2.png")
obstacle3 = loadImage("obstacle3.png")
obstacle4 = loadImage("obstacle4.png")
obstacle5 = loadImage("obstacle5.png")
obstacle6 = loadImage("obstacle6.png")
}




function setup () {
createCanvas(600, 300)
trex = createSprite(100, 250, 50, 50)
trex.addAnimation("trex1",trexi)
trex.scale = 0.5
ground = createSprite(300, 250, 600, 20)
ground.x = ground.width/2
ground.addImage(groundi)
invisible = createSprite(300, 260, 600, 10)
invisible.visible = false
cloudgroup = new Group()
obstaclegroup = new Group()
}

function draw () {
background("black")

 if (keyDown("space")&& trex.y >= 222.1) {
 trex.velocityY = -10
     
 }
 

  
  
  trex.velocityY = trex.velocityY + 0.5
  ground.velocityX = -4
  if (ground.x < 0)  {
  ground.x = ground.width/2
     
  }
  score = score + Math.round(getFrameRate()/60)
  text("Score:"+score, 500, 50)
  
  trex.collide(invisible)
  
  
  
  
  
  drawSprites() 

spawnClouds();
spawnObstacles();
}

function spawnClouds() {
if (frameCount % 80 === 0) {
var cloud = createSprite (600, 150, 20, 20)
cloud.y = random(50, 150)
cloud.velocityX = -6
cloud.addImage(cloudi)
trex.depth = cloud.depth + 1
cloudgroup.add(cloud)
}

}

function spawnObstacles() {
if (frameCount % 100 === 0) {
var obstacle = createSprite(600, 230, 10, 10)  
obstacle.velocityX = -4  
var rand = Math.round(random(1,6,))

switch(rand) {
    
  case 1: obstacle.addImage(obstacle1);
  break;
  
    case 2: obstacle.addImage(obstacle2);
  break;
  
  
   case 3: obstacle.addImage(obstacle3);
  break;
  
   case 4: obstacle.addImage(obstacle4);
  break;
  
     case 5: obstacle.addImage(obstacle5);
  break;

 case 6: obstacle.addImage(obstacle6);
  break;

  default:
    break;
}
  
obstacle.scale = 0.5
obstacle.lifetime = 150



console.log (rand)   
obstaclegroup.add(obstacle )    

}

}







