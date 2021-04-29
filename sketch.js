var Asound

var h, keyA;

function preload(){
Asound = loadSound("jump.mp3")

}
function setup(){
createCanvas(720,600);


var keyC = createSprite(20,500,50,200);
var keyD = createSprite(72,500,50,200);
var keyE = createSprite(124,500,50,200);
var keyF = createSprite(176,500,50,200);
var keyG = createSprite(228,500,50,200);
    keyA = createSprite(280,500,50,200);
var keyB = createSprite(332,500,50,200);
var keycS = createSprite(45,450,25,100);
var keydS = createSprite(97,450,25,100);  
var keyfS = createSprite(202,450,25,100); 
var keygS = createSprite(254,450,25,100); 
var keyaS = createSprite(306,450,25,100); 

var keyC1 = createSprite(384,500,50,200);
var keyD1 = createSprite(436,500,50,200);
var keyE1 = createSprite(488,500,50,200);
var keyF1 = createSprite(540,500,50,200);
var keyG1 = createSprite(592,500,50,200);
var keyA1 = createSprite(644,500,50,200);
var keyB1 = createSprite(696,500,50,200);
var keycS1 = createSprite(409,450,25,100);
var keydS1 = createSprite(461,450,25,100);  
var keyfS1 = createSprite(565,450,25,100); 
var keygS1 = createSprite(617,450,25,100); 
var keyaS1 = createSprite(669,450,25,100); 


keyA.shapeColor="white";
keyB.shapeColor="white";
keyC.shapeColor="white";
keyD.shapeColor="white";
keyE.shapeColor="white";
keyF.shapeColor="white";
keyG.shapeColor="white";
keycS.shapeColor="black";
keydS.shapeColor="black";
keyfS.shapeColor="black";
keygS.shapeColor="black";
keyaS.shapeColor="black";

keyA1.shapeColor="white";
keyB1.shapeColor="white";
keyC1.shapeColor="white";
keyD1.shapeColor="white";
keyE1.shapeColor="white";
keyF1.shapeColor="white";
keyG1.shapeColor="white";
keycS1.shapeColor="black";
keydS1.shapeColor="black";
keyfS1.shapeColor="black";
keygS1.shapeColor="black";
keyaS1.shapeColor="black";

h = createSprite(280,10,10,10)
h.shapeColor = "green";
h.velocityY = 4;

}

function draw() {

background("blue");

    
drawSprites();

textSize(20);
  fill("red");
  text("C",20,550);
  
    textSize(20);
  fill("red");
  text("D",70,550);
  
    textSize(20);
  fill("red");
  text("E",125,550); 
  
  textSize(20);
  fill("red");
  text("F",170,550);
  
  textSize(20);
  fill("red");
  text("G",225,550);
  
  textSize(20);
  fill("red");
  text("A",270,550);
  
  textSize(20);
  fill("red");
  text("B",330,550);
  
    textSize(20);
  fill("red");
  text("C♯",35,460);
  
    textSize(20);
  fill("red");
  text("D♯",85,460);
  
    textSize(20);
  fill("red");
  text("F♯",190,460);
  
    textSize(20);
  fill("red");
  text("A♯",245,460);
  
    textSize(20);
  fill("red");
  text("B♯",290,460);
 
  if(h.isTouching(keyA)){
    Asound.play();
  }

}