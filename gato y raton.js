var garden;
var cat1,cat2,cat3,cat4;
var mouse1,mouse2,mouse3,mouse4;
function preload() {
    //load the images here
garden = loadImage("images/garden.png")
catimg1 = loadAnimation("images/cat1.png");
mouseimg1 = loadAnimation("images/mouse1.png")
catimg2 = loadAnimation("images/cat2.png");
mouseimg2 = loadAnimation("images/mouse2.png");
}

function setup(){
createCanvas(1000,800);
//create tom and jerry sprites here
cat = createSprite(870,600);
cat.addAnimation("cat1.png",catimg1);
cat.scale=0.2;
}

function draw() {
background("garden.png");
//Write condition here to evalute if tom and jerry collide
if (cat.x - mouse.x<(cat.width - mouse.width)/2){
cat,velocityX=0;
cat.addAnimation("cat3.png",catimg3);
cat.changeAnimation("cat4.png");
cat.x=300;
cat.scale=0.2;
}
    drawSprites();    
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
mouse.addAnimation("mouse2.png",mouseimg2);
mouse.changeAnimation("mouse3.png");
mouse.frameDelay = 25;
cat.velocityX =-5;
}

}
