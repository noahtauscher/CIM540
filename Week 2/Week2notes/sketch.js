var mouthX = 100;
var mouthY = 270;
var mouthW = 300;
var mouthH = 100;

function setup() {
	createCanvas(500,500);
	background(20,100,100);
	
	console.log("width: " + width + " " + "height:" + height);
}

function draw() {
	ellipse(170,150,75,75);
	
	ellipse(320, 150, 75, 75);
	
	rect(mouthX, mouthY, mouthW, mouthH);
	
	line(mouthX, mouthY + mouthH/2 , ,320);
}


//elipse dimensions are x location, y location, width, height