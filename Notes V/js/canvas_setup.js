window.onload = function () {
    // get the canvas
    let canvas = document.getElementById("testCanvas");
    //get the context
    let context = canvas.getContext("2d");

    // let rectSize = 50
    // //a draw a rect:
    // context.fillStyle = "rgba(255,255,255,255)"; //context is the library that is being accessed, which is essentially CANVAS API
    // // draw a rect
    // context.fillRect(canvas.width / 2, canvas.height / 2, rectSize, rectSize);
    // // cut out a rect inside
    // context.clearRect(canvas.width / 2 + rectSize / 4, canvas.height / 2 + rectSize / 4, rectSize / 2, rectSize / 2);

    // context.fillStyle = "rgb(243, 131, 206)"; // change the color we are using
    // let xPos = canvas.width / 3;
    // let yPos = canvas.height / 2;
    // let radius = 40;
    // let startAngle = 0;
    // let endAngle = Math.PI * 2; //full rotation
    // context.strokeStyle = "#ff00c8"; // change the color we are using
    // context.beginPath();
    // context.arc(xPos, yPos, radius, startAngle, endAngle, true);
    // context.closePath();
    // context.fill(); // set the fill
    // context.lineWidth = 2; //change stroke
    // context.stroke(); //set the stroke

    // context.beginPath();
    // context.arc(xPos + 150, yPos + 150, radius, startAngle, endAngle, true);
    // context.closePath();

    // context.fill(); // set the fill
    // context.lineWidth = 2; //change stroke
    // context.stroke(); //set the stroke


    // AN IRREGULAR SHAPE
    // let lineLength = 100;
    // let x1 = canvas.width / 2;
    // let y1 = canvas.height / 2;
    // let x2 = x1 + lineLength;
    // let y2 = y1 - lineLength;
    // let x3 = x1 - lineLength;

    // context.beginPath(); //start a path
    // context.moveTo(x1, y1); //where to start drawing
    // context.lineTo(x2, y1); //lineTo(where to go from last...)
    // context.lineTo(x2, y2); //lineTo(where to go from last...)
    // context.lineTo(x3, y2); //lineTo(where to go from last...)
    // context.lineTo(x1, y1); //lineTo(where to go from last...)
    // context.strokeStyle = "#330190"; // change the color we are using
    // context.fillStyle = "#bb25d5ff"
    // context.lineWidth = 2;
    // context.stroke();
    // context.fill();
    // context.closePath(); //end a path ...

    function createFlower(xPos, yPos, radius, colors) {
        drawSinglePetal(xPos, yPos + 3 * radius / 2, radius, colors[0])
        drawSinglePetal(xPos, yPos - 3 * radius / 2, radius, colors[0])
        drawSinglePetal(xPos - 3 * radius / 2, yPos, radius, colors[0])
        drawSinglePetal(xPos + 3 * radius / 2, yPos, radius, colors[0])
        drawSinglePetal(xPos, yPos, radius, colors[1])

    }

    function drawSinglePetal(x, y, r, fillColor) {
        context.fillStyle = fillColor; // change the color we are using
        context.strokeStyle = fillColor; // change the color we are using
        context.beginPath();
        context.arc(x, y, r, startAngle, endAngle, true);
        context.fill(); // set the fill
        context.lineWidth = 2; //change stroke
        context.stroke();//set the stroke
        context.closePath();
    }

    //call function to create a flower
    let startAngle = 0;
    let endAngle = Math.PI * 2; //full rotation
    // createFlower(canvas.width / 2, canvas.height / 2, 60, ["#ff0088ff", "rgb(187,231,254)"])
    // createFlower(canvas.width / 4, canvas.height / 4, 10, ["#ff0088ff", "rgb(187,231,254)"])

    let r1 = 30;
    let counter = 0;
    window.requestAnimationFrame(animate);
    function animate() {
        context.clearRect(0, 0, canvas.width, canvas.height);

        console.log("go")

        let newSize = Math.sin(counter) * r1 + r1;
        createFlower(canvas.width / 2, canvas.height / 2, newSize, [
            "#ff0088ff",
            "#ce4990ff",
        ]);

        counter += 0.01;
        window.requestAnimationFrame(animate);
    }


};

