var mouthX = 342;
var mouthY = 180;
var mouthW = 50;
var mouthH = 250;

var elipseX = 370;
var elipseY = 100;
var elipseW = 75;
var elipseH = 75;



function setup() {
	createCanvas(500,500);
	backgroundColor(0,0,100);
	
	console.log("width: " + width + " " + "height:" + height);
}

function draw() {

	
		ellipse(elipseX,elipseY,elipseW,elipseH);
	fill(0,0,0);
	ellipse(elipseX,elipseY,elipseW/2,elipseH/2);
	
	fill(0,0,225);
	rect(mouthX/8,mouthY - 130,mouthW,mouthH*1.5);
	
	rect(mouthX/1.5,mouthY - 130,mouthW,mouthH*1.5)
	
	rect(mouthX/3.8,mouthY,mouthH - 111,mouthW - 4);
	
	rect(342, mouthY, mouthW, mouthH);
	
}

function mousePressed(){
	
	
	
}




//elipse dimensions are x location, y location, width, height