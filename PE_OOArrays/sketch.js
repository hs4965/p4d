var myBubble = [];
var numBubble;

function setup() {
    createCanvas(400, 400);
    
    numBubble = 500;
    for(var i=0; i<numBubble; i++)
    {
        myBubble[i] = new Bubble();
    }
}

function draw() {
  background(220);
  
    for(var i=0; i<numBubble; i++)
    {
        myBubble[i].move();
        myBubble[i].display();
        myBubble[i].wrap();
    }
}


