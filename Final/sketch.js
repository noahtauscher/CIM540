var bg;

var fret1 = 248;
var fret2 = 496;
var fret3 = 744;
var fret4 = 992;
var fret5 = 1228;

var midfret1 = 372;
var midfret2 = 620;
var midfret3 = 868;

var ellipse1 = 868;

var E1 = 22;
var A = 90;
var D = 158;
var G = 226;
var B = 294;
var E = 360;

var textX = 116;

var button1 = 10;
var button2 = 90;
var button3 = 170;

var fingersize1 = 0;
var fingersize2 = 0;
var fingersize3 = 0;

var input, button, greeting;

var Dmp3;
var Cmp3;
var Gmp3;


function setup() {
    bg = loadImage ("images/wood.jpeg")
	createCanvas(1240, 382);
	Dmp3 = loadSound("Sounds/D.mp3");	
	Cmp3 = loadSound("Sounds/C.mp3");	
	Gmp3 = loadSound("Sounds/G.mp3");	
	
}

function draw() {
   	strokeWeight(1);
	
	background(bg);
	
	fill(210);
	//fret 1
	rect(fret1, 1, 10, 379);
	//fret 2
	rect(fret2, 1, 10, 379);
	//fret3
	rect(fret3, 1, 10, 379);
	//fret4
   	rect(fret4, 1, 10, 379);
	//fret5
	rect(fret5, 1, 10, 379);
	
	//dot1
	ellipse(ellipse1, 382/2, 25, 25);
	
	strokeWeight(4);
	//E
	line(248, E1, 1240, E1);
	//A
	line(248, A, 1240, A);
	//D
	line(248, D, 1240, D);
	//G
	line(248, G, 1240, G);
	//B
	line(248, B, 1240, B);
	//E
	line(248, E, 1240, E);
	
	fill(200);
	//button1
	rect(6, 10, 230, 80);
	//button2
	rect(6, 90, 230, 80);
	//button3
	rect(6, 170 , 230, 80);
	
	//button text
	textSize(32);
	fill(0);
	text("G", textX, 220);
	text("C", textX, 140);
	text("D", textX, 60);	
	
	
	fill(245, 245, 200);
	strokeWeight(1);
	
	//D stringG
	ellipse(midfret2, G, fingersize1, fingersize1);
	//D stringB
	ellipse(midfret3, B, fingersize1, fingersize1);
	//D stringE
	ellipse(midfret2, E, fingersize1, fingersize1);

	//C stringA
	ellipse(midfret3, A, fingersize2, fingersize2);
	//C stringB
	ellipse(midfret2, D, fingersize2, fingersize2);
	//C stringE
	ellipse(midfret1, B, fingersize2, fingersize2);
	
	//G stringE1
	ellipse(midfret3, E1, fingersize3, fingersize3);
	//G string A
	ellipse(midfret2, A, fingersize3, fingersize3);
	//G string D
	ellipse(midfret3, B, fingersize3, fingersize3);
	//G string E
	ellipse(midfret3, E, fingersize3, fingersize3);
	
	
	
	
	 if (mouseY > button1 && mouseY < button2 ) {
       
        currentSection = 1;
		 
    } else if (mouseY > button2 && mouseY < button3) {
        currentSection = 2;

    } else if (mouseY > button3 && mouseY < 250) {
        currentSection = 3;

	}
}

function mousePressed(){
  	if (currentSection == 1){
		fingersize1 = 40
		fingersize2 = 0
		fingersize3 = 0
		Dmp3.play();
	//and play chord
	}
		
	if (currentSection == 2){
		fingersize1 = 0
		fingersize2 = 40
		fingersize3 = 0
		Cmp3.play();
	//and play chord
	}
		
	if (currentSection == 3) {
        fingersize1 = 0
		fingersize2 = 0
		fingersize3 = 40
		Gmp3.play();
	//and play chord
  
    }
}