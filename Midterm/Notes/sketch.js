
var img1;
var img2;
var img3;
var img4;
var img5;

var picArray = [];

var picIndex = 0;

function setup() {
    createCanvas(2558, 1428);


    picArray.push(loadImage("images/img1.jpg"));
    picArray.push(loadImage("images/img2.jpg"));
    picArray.push(loadImage("images/img2.jpg"));
    picArray.push(loadImage("images/img4.jpg"));
    picArray.push(loadImage("images/image5.jpg"));

    picIndex = picChooser(0,4);
}

function draw() {
    

    image(picArray[picIndex], 0, 0);

   

}

function mousePressed(){
    picIndex = picChooser(0,2);
}

function picChooser(min, max) {
   

    var randomNum = int(random(min, max));

    return randomNum;
}