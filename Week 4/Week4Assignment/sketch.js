var eColor = 0;
var counter = 0;
var bgColor = "white";

function setup() {
    createCanvas(400, 400);
    eColor = color(235, 122, 79);
}

function draw() {
    background(bgColor);

    fill(eColor);
    ellipse(width / 2, counter, 100, 100);

    

    if(mouseY < 200){
        bgColor = "orange";
		counter = counter + 1;
   }
	
	else(mouseY > 200){
       bgColor = "white";
	 	counter = counter - 1;
    }

   
}


function mousePressed() {
    counter = counter + 1;
    console.log(counter);
}