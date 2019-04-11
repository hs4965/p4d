//Haotian Sun
//IGME-609 Project 1
//Self-portrairt
//January 29, 2019
function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(207, 232, 206);
  drawBody();
  drawClothes();
  drawArms();
  drawHead();
  drawAccessories();
  drawLoop();
}

function drawBody(){ 
  noStroke();
  fill(175, 89, 206);
  beginShape();
	vertex(220, 360);
	vertex(380, 360);
  vertex(400, 600);
	vertex(200, 600);
	endShape(CLOSE);
}

function drawClothes(){
  fill(181, 169, 240);
  triangle(220, 360, 300, 360, 260, 440);
  triangle(300, 360, 380, 360, 340, 440);
  fill(255);
  stroke(181, 169, 240);
  strokeWeight(5);

  ellipse(300, 500, 20, 20);
  ellipse(300, 550, 20, 20);
  fill(181, 169, 240);
  noStroke();
  arc(240, 520, 50, 80, 0, PI,TWO_PI, CHORD);
  arc(360, 520, 50, 80, 0, PI,TWO_PI, CHORD);
  fill(255);
  arc(360, 520, 50, 30, 0, PI,TWO_PI, CHORD);
  arc(240, 520, 50, 30, 0, PI,TWO_PI, CHORD);
}

function drawArms(){
  stroke(175, 89, 206);
	point(370, 430);
	point(450, 300);
	point(400, 150);
	point(360, 100);
	strokeWeight(45);
	noFill();
	beginShape();
	curveVertex(370, 430);
	curveVertex(370, 430);
	curveVertex(450, 300);
	curveVertex(400, 150);
	curveVertex(360, 100);
	curveVertex(360, 100);
	endShape();
  stroke(175, 89, 206);
	point(230, 430);
	point(150, 300);
	point(200, 150);
	point(240, 100);
	strokeWeight(45);
	noFill();
	beginShape();
	curveVertex(230, 430);
	curveVertex(230, 430);
	curveVertex(150, 300);
	curveVertex(200, 150);
	curveVertex(240, 100);
	curveVertex(240, 100);
	endShape();
}

function drawHead(){
  //face
  fill(254, 228, 206);
  strokeWeight(0);
  ellipse(300, 300, 140, 180);
  //hair
  fill(0);
  arc(300, 290, 140, 165, PI, TWO_PI);
  fill(254, 228, 206);
  triangle(230, 290, 370, 290, 300, 240);
  //face
  fill(249, 131, 160);
  ellipse(260,320,20,10);
  ellipse(340,320,20,10);
  fill(0);
  ellipse(270, 300, 10, 20);
  ellipse(330, 300, 10, 20);
  fill(249, 94, 41);
  arc(300, 340, 40, 40, 0, PI,TWO_PI, CHORD);
  fill(254, 228, 206);
  arc(300, 325, 60, 40, 0, PI,TWO_PI, CHORD);
  noFill();
  strokeWeight(2);
  stroke(0);
  arc(270, 280, 10, 10, PI, TWO_PI);
  arc(330, 280, 10, 10, PI, TWO_PI);

  //hair
  noStroke();
  fill(0);
  triangle(210,420,260,420,230,280);
  triangle(340,420,390,420,370,280);
}

function drawAccessories(){
  //bowtie
  fill(181, 169, 240);
  triangle(215,300,230,290,215,280);
  triangle(230,290,245,300,245,280);
  triangle(355,300,370,290,355,280);
  triangle(370,290,385,300,385,280);  
  fill(255);
  ellipse(230,290,10,10);
	ellipse(370,290,10,10);
  //hand
  noStroke();
  fill(254, 228, 206);
  ellipse(250,100,60,60);
  ellipse(350,100,60,60);
  fill(175, 89, 206);
  ellipse(230,109,43,50);
  ellipse(370,109,43,50);
  //heart
  stroke(249, 41, 41);
	point(300, 80);
	point(280, 60);
	point(260, 80);
	point(300, 120);
	strokeWeight(15);
	noFill();
	beginShape();
	curveVertex(300, 80);
	curveVertex(300, 80);
	curveVertex(280, 60);
	curveVertex(260, 80);
	curveVertex(300, 120);
	curveVertex(300, 120);
	endShape();  
  stroke(249, 41, 41);
	point(300, 80);
	point(320, 60);
	point(340, 80);
	point(300, 120);
	strokeWeight(15);
	noFill();
	beginShape();
	curveVertex(300, 80);
	curveVertex(300, 80);
	curveVertex(320, 60);
	curveVertex(340, 80);
	curveVertex(300, 120);
	curveVertex(300, 120);
	endShape();
  //flower
  push();
  fill(255,180);
  translate(300, 450);
  noStroke();
  for (var i = 0; i < 10; i ++) {
    ellipse(0, 8, 11, 30);
    rotate(PI/5);
  }
  pop();
  }
function drawLoop(){
  stroke(255);
  strokeWeight(5);
  var ellipseW=560;
  for(var x=0;x<8;x++){
    ellipse(300,300,ellipseW);
    ellipseW=ellipseW-50;
  }
}

