var tower,towerimg
var climber,climberimg,climbergroup
var door,doorimg,doorgroup
var ghost,ghostimg
var gamestate="play"
var bgsound
var invisibleB,invisibleBgroup
function preload(){
towerimg=loadImage("tower.png")  
climberimg=loadImage("climber.png")  
doorimg=loadImage("door.png")  
ghostimg=loadImage("ghost-standing.png")  
bgsound=loadSound("spooky.wav")        
  
  
  
  
}

function setup(){
createCanvas(600,600)  
 tower=createSprite(300,300) 
 tower.addImage("tower",towerimg) 
 tower.velocityY=1
  
  doorgroup=new Group();
  climbergroup=new Group();
  invisibleBgroup=new Group();
  ghost=createSprite(200,200,50,50)
  ghost.addImage(ghostimg)
  ghost.scale=0.4
  
  bgsound.loop()
  

}

function draw(){
 background("red")
  if(gamestate==="play"){
 if (tower.y>500 ) {
 tower.y=300    
}
  ghost.collide(climbergroup)
spawmDoors();  
 if(keyDown(LEFT_ARROW)) {
   ghost.x=ghost.x-3
}
  
if(keyDown(RIGHT_ARROW)) {
   ghost.x=ghost.x+3
}  
 
if(keyDown("space")) {
   ghost.velocityY=-6
}  
  ghost.velocityY=ghost.velocityY+0.5
    if(invisibleBgroup.isTouching(ghost)||ghost.y>600){
      ghost.destroy()
      gamestate="end"
    }
  
  drawSprites() ;
  }
  if(gamestate==="end"){
  stroke("yellow")  
  fill("yellow")  
  textSize(30)
    text("GAMEOVER",300,300)}
}
function spawmDoors(){
  if(frameCount%240===0){
    door=createSprite(200,-50,100,100)
   door.addImage(doorimg)
    door.velocityY=1
    door.x=Math.round(random(120,400))
    door.lifetime=800
    doorgroup.add(door)
    
    climber=createSprite(200,10,100,100)
    climber.addImage(climberimg)
    climber.velocityY=1
    climber.x=door.x
    climber.lifetime=800
    climbergroup.add(climber)                            
    
    door.depth=ghost.depth
    ghost.depth+=1
    
    invisibleB=createSprite(200,25,climber.width,2)
    invisibleB.velocityY=1
    invisibleB.x=door.x
    invisibleB.lifetime=800
    invisibleBgroup.add(invisibleB)                            
    //invisibleB.visible=false
    invisibleB.debug=true
}  
  
  
  
  
  
}




