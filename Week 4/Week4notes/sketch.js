
function setup() {
	
	createCanvas(400,400);
	eColor = color(235,122,79);
	background(20,100,100);

}

function draw() {
	background(255);
	
	fill(eColor);
	ellipse(width/2, height/2, 200, 200);
	
	if(mouseX > width/2){
		eColor = color(200,26,15);
	}
	
	else{
		eColor = color(123,45,222);
	}
	
}

function mousePressed(){
  backgroundColor(123,45,222);
}

function mouseReleased(){
  backgroundColor(255);
}