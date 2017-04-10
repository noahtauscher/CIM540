var iArray = [];

function setup(){
	createCanvas(400,400);
	iArray.push(new interface(50,299,100));
	iArray.push(new interface(150,299,100));
	iArray.push(new interface(250,299,100));
}

function draw(){
	background(255);
	for(var i = 0; i < iArray.length; i++){
		iArray[i].display();
	}
}


function interface(tempX, tempY, tempSize, tempType){
	this.x = tempX;
	this.y = tempY;
	this.size = tempSize;
	this.type = tempType;
	this.display = function{
		rect(this.x, this.y, this.size, this.size);
	}
}