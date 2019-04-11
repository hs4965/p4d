//Haotian Sun
//IGME-609 Project 3
//Conditionals and Loops
//March 25, 2019
var bgColor;
var rectColor;
function setup() {
  createCanvas(800, 800);
  bgColor = color(153, 102, 51);
  rectColor = color(0,0,230);
  
}

function draw() {
  background(bgColor);
  textSize(20);
  fill(255);
  noStroke();
  text("Press 'c' to change background color. " , 100, 100);
  text("Press 'b' to change boxes color. " , 100, 140);
  text("Press 's' to draw lines. " , 100, 180);
  drawRect();
  mouseColor();
  colorChange();
  buttonBox();
}
function drawRect() {
  var i = 0;
  var rectX = 100; 
  //at least 1 loop
  while(i<4){
    fill(rectColor);
    rect(rectX,300,130,180);
    rectX += 150;
  	i ++;
  }
}
//mouse interaction 1
function mouseColor(){
  push();
  if(mouseY>275 && mouseY< 505 && mouseX>75 && mouseX<705){
    fill(0,230,0);
    ellipse(mouseX,mouseY,50);
  }
  pop();
}
//mouse interaction2
function buttonBox(){
  rect(300,600,200,80);
  if(mouseX>300 && mouseX<500 && mouseY>600 && mouseY<680){
    textSize(20);
    fill(255);
    noStroke();
    text("Mouse In Button. " , 330, 650);
    fill(100,45,23);
    rect(0,350,800,100);
    fill(255);
    ellipse(frameCount,400,80);
    
     }
}
//3 keyboard inputs
function colorChange(){
   if(keyIsPressed && key == 'c'){
     bgColor = color (random(255),random(255),random(255));
 }
  if(keyIsPressed && key == 'b'){
    rectColor = color (random(255),random(255),random(255));
     }
  if(keyIsPressed && key == 's')
  {
    stroke(255);
    strokeWeight(3);
    line(mouseX,mouseY,0,0);
    line(mouseX,mouseY,0,800);
    line(mouseX,mouseY,800,0);
    line(mouseX,mouseY,800,800);
  }
}
