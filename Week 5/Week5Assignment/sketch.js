var choices = {
    "Number1": 0,
    "Number2": 0,
    "Number3": 0,
    "Number4": 0
};


function setup() {
    createCanvas(400, 100)
    console.log(choices);
    console.log(choices["Number1"]);
    console.log(choices["Number2"]);
    console.log(choices["Number3"]);
    console.log(choices["Number4"]);

}

function draw() {

}


function keyPressed() {
    //console.log(keyCode);

    //49 == 1, 50 == 2, 51 == 3, 52 == 4
    if (keyCode == 49) {
        choices["Number1"]++;
    } else if (keyCode == 50) {
        choices["Number2"]++;
    } else if (keyCode == 51) {
        choices["Number3"]++;
    } else if (keyCode == 52) {
        choices["Number4"]++;
    }


    console.log(choices);


}