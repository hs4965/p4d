//Haotian Sun
//IGME-609 Project 2
//Interactive Scene
//February 22, 2019
function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(121,185,230);
  fill(39,58,127);
  noStroke();
  rect(0,100,600,300);
  drawTower();
  drawHouse();
  drawBoat();
  drawBird();
  
}
  //tower
function drawTower(){
  noStroke();
  fill(232,225,220);
  rect(160,110,80,200);
  var i=0;
  var rectY=120;
  while(i<8){
    fill(187,39,39);
    noStroke();
    rect(160,rectY,80,10);
    rectY=rectY+25;
    i++;
  }
  fill(15,25,55);
  noStroke();
  rect(170,70,60,40);
  fill(190,38,33);
  arc(200, 70, 50, 50, PI, TWO_PI);
  fill(15,25,55);
  rect(197,0,3,45);
}
function drawHouse(){
  //house
  var z=0;
  var chimneyTopx=265;
  while(z<4){
    noStroke();
    fill(255);
    rect(chimneyTopx,120,10,10);
    chimneyTopx=chimneyTopx+60;
    z++;
  }
  var t=0;
  var chimneyX=260;
  while(t<4){
    noStroke();
    fill(232,144,78);
    rect(chimneyX,130,20,70);
    chimneyX=chimneyX+60;
    t++;
  }
  fill(195,194,193);
  beginShape();
	vertex(300, 250);
	vertex(375, 200);
	vertex(450, 250);
  vertex(450, 350);
  vertex(300, 350);
	endShape(CLOSE);
  
  fill(116,117,116);
  beginShape();
	vertex(200, 225);
	vertex(300, 250);
	vertex(300, 350);
  vertex(200, 325);
	endShape(CLOSE);
  
  fill(116,117,116);
  beginShape();
	vertex(450, 250);
	vertex(500, 250);
	vertex(520, 270);
  vertex(520, 330);
  vertex(450, 330);
	endShape(CLOSE);
  
  fill(193,25,31);
  beginShape();
  vertex(300, 250);
	vertex(200, 225);
	vertex(250, 180);
	vertex(470, 180);
  vertex(500, 250);
  vertex(450, 250);
  vertex(375, 200);
	endShape(CLOSE);
  //house details
  fill(32,51,112);
  stroke(255);
  strokeWeight(3);
  rect(335,240,20,30);
  rect(395,240,20,30);
  rect(325,300,30,40);
  rect(405,300,30,40);
  
}
function drawBoat(){
  //boat
  noStroke();
  fill(193,25,31);
  beginShape();
  vertex(10+frameCount, 390);
	vertex(frameCount-10, 360);
	vertex(90+frameCount, 360);
	vertex(70+frameCount, 390);
	endShape(CLOSE);
  fill(85,175,226);
  triangle(35+frameCount,358,10+frameCount,358,35+frameCount,305);
  triangle(37+frameCount,358,57+frameCount,358,37+frameCount,325);
}
function drawBird(){
	//bird
  fill(247,247,47);
  ellipse(mouseX,mouseY,20,30);
  ellipse(mouseX,mouseY-20,15);
  triangle(mouseX+5,mouseY-25,mouseX-5,mouseY-25,mouseX,mouseY-33);
  triangle(mouseX+15,mouseY+25,mouseX-15,mouseY+25,mouseX,mouseY+10);
  beginShape();
	vertex(mouseX-45,mouseY+5);
	vertex(mouseX-25,mouseY-10);
	vertex(mouseX-5,mouseY-5);
	vertex(mouseX-5,mouseY+5);
	vertex(mouseX-25,mouseY);
	endShape(CLOSE);
  beginShape();
	vertex(mouseX+5,mouseY+5);
	vertex(mouseX-5,mouseY-5);
	vertex(mouseX+25,mouseY-10);
	vertex(mouseX+45,mouseY+5);
	vertex(mouseX+25,mouseY);
	endShape(CLOSE);
}
