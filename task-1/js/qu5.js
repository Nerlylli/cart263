"use strict";

let counter = 0;
let mom1 = undefined;
let fill1 = [242, 160, 17];
let radius = 100;
let ellipseAlpha = 100;

function createMom() {
    let mom = {
        x: 50,
        y: 50,
        size: 100,

    };

    return mom;
}

//draw buttons
function displaySquare(mom) {
    push();
    noStroke();
    fill(fill1);
    rect(mom.x, mom.y, mom.size);
    pop();

}

function setup() {
    console.log("go")

    createCanvas(600, 600);
    //create the button
    mom1 = createMom();

}

function draw() {
    background(0);

    displaySquare(mom1);

    push();
    noStroke();
    fill(255, 255, 255, ellipseAlpha);
    ellipse(300, 300, radius);
    pop();


}


function mouseMoved() {
    if (mouseX >= 50 && mouseX <= 150 && mouseY >= 50 && mouseY <= 150) {
        fill1 = [237, 200, 135];
    }
    else {
        fill1 = [242, 160, 17];
    }
}

function mouseClicked() {
    if (mouseX >= 50 && mouseX <= 150) {
        counter++;
    }
}