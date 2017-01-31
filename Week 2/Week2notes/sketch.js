var mouthX = 342;
var mouthY = 180;
var mouthW = 50;
var mouthH = 250;

function setup() {
	createCanvas(500,500);
	background(20,100,100);
	
	console.log("width: " + width + " " + "height:" + height);
}

function draw() {
	ellipse(370,100,75,75);
	
	rect(mouthX/8,mouthY - 130,mouthW,mouthH*1.5);
	
	rect(mouthX/1.5,mouthY - 130,mouthW,mouthH*1.5)
	
	rect(mouthX/3.8,mouthY,mouthH - 111,mouthW - 4);
	
	
	
	rect(mouthX, mouthY, mouthW, mouthH);
	
}


//elipse dimensions are x location, y location, width, height