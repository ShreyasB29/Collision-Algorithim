var fR,mR;




function setup() {
  createCanvas(1200,800);
  fR = createSprite(600, 400, 50, 80);
  fR.shapeColor = "green";
  mR = createSprite(400, 200, 80, 30);
  mR.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  mR.x = World.mouseX;
  mR.y = World.mouseY;

  if(mR.x - fR.x < fR.width/2 + mR.width/2 &&
    fR.x - mR.x < fR.width/2 + mR.width/2 &&
    mR.y - fR.y < fR.height/2 + mR.height/2 &&
    fR.y - mR.y < fR.height/2 + mR.height/2) {

      fR.shapeColor = "red";
      mR.shapeColor = "red";
  }
    else {
      fR.shapeColor = "green";
      mR.shapeColor = "green";
    }


  drawSprites();
}