"use strict";

//variable declaration
let size = 30;
let shapeColor;
let isCircle = true; //isCircle is toggled true by default

//function setup
function setup() {
    console.log("go")
    createCanvas(600, 600);

    //initializing shapeColor by attributing it random values
    shapeColor = {
        r: random(255),
        g: random(255),
        b: random(255),
    };
}

function draw() {
    background(0);

    //nested loop
    for (let x = 0; x < width; x += size) {
        for (let y = 0; y < height; y += size) {


            //checks for isCircle when the mouse is pressed, and since it is already true by default, it will always display ellipses
            if (isCircle) {
                push();
                fill(shapeColor.r, shapeColor.g, shapeColor.b)
                noStroke()
                ellipse(x + size / 2, y + size / 2, size);
                pop();
            }
            //if isCircle is false (which is when user clicks on mouse), squares will be displayed instead
            else {
                push();
                fill(shapeColor.r, shapeColor.g, shapeColor.b);
                stroke(0);
                strokeWeight(1)
                rect(x, y, size, size);
                pop();
            }
        }
    }
}

//function keyPressed which checks for keyCode 32, that changes the colors of the shapes
function keyPressed() {
    if (keyCode == 32) {
        shapeColor = {
            r: random(255),
            g: random(255),
            b: random(255),
        };

    }
}

//function mousePressed that will change the true value from isCircle,to false
function mousePressed() {
    isCircle = !isCircle;
}