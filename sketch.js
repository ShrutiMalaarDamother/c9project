
function setup() {
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,30,30);

}

function draw() 
{
  if (keyIsDown(RIGHT_ARROW)) 
  {
    background("pink");
    
  }
  if (keyIsDown(LEFT_ARROW)) 
  {
    background("lightblue");
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("purple");
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("lightgreen");
  }


  
  drawSprites();
}

