
function setup() {
  createCanvas(400,400);
  box = createSprite(100, 200, 30, 30)
}

function draw() 
{
  background(30);
  if (keyIsDown(RIGHT_ARROW)) {
    box.position.x = box.position.x + 5
    
  }
  if (keyIsDown(LEFT_ARROW)) {
    box.position.x = box.position.x - 5

    
  }
  drawSprites ()

}




