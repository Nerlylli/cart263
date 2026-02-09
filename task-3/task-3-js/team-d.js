setup_D();
/** THEME: DECEPTION  */
function setup_D() {
  console.log("in d");
  /**************************************************** */
  //get the buttons
  activateButtons(`#TEAM_D`, "ani_canvD", aniA, aniB, aniC, aniD);

  function aniA(parentCanvas) {
    console.log("in ani-A -teamD");


    parentCanvas.style.background = "rgb(140, 10, 105)";


    let button = document.createElement("div");
    button.classList.add("TEAM_D_box");
    button.textContent = "CLICK HERE";
    button.style.position = "relative";
    button.style.zIndex = "10";
    parentCanvas.appendChild(button);


    button.addEventListener("click", function () {
      let particleDiv = document.createElement("div");
      particleDiv.id = "particle"
      parentCanvas.appendChild(particleDiv);
      particleDiv.classList.add("TEAM_D_particle")
      particleDiv.style.background = "rgb(255, 255, 255)";
      particleDiv.style.width = "90px"
      particleDiv.style.height = "90px"

      let randomLeft = Math.random() * (parentCanvas.clientWidth - 90);
      let randomTop = Math.random() * (parentCanvas.clientHeight - 90);

      particleDiv.style.left = randomLeft + "px";
      particleDiv.style.top = randomTop + "px";
      particleDiv.style.position = "absolute";
    });
  }



  /****************ANI B ************************************ */
  /** PUT ALL YOUR CODE FOR INTERACTIVE PATTERN B INSIDE HERE */
  /****************ANI B ************************************ */
  /**************** TASK *******************************************
   * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:).
   * 1: create a creatve, visual pattern using text, divs as shapes, images ... 
   * 2: add in mouseover event listener(s) somewhere to make the sketch interactive
   *
   * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
   * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
   * this is so that your styles are not overriden by other teams.
   * NOTE::: All your code is to be added here inside this function -
   * remember you can define other functions inside....
   * Do not change any code above or the HTML markup.
   * **/

  function aniB(parentCanvas) {
    console.log("in ani-B -teamD");

  }
  //getting the size of the canvas where my animation is displayed
  let boundingBoxParent = parentCanvas.getBoundingClientRect();

  let colors = ["#0080ff", "#0b2661", "#ade4ff", "#3a7df1", "#00d9ff", "#0008ff"]; //balloon colors that I initiated
  let totalBalloon = 15; //number total of balloons

  for (let i = 0; i < totalBalloon; i++) { //loop 15 times

    let balloon = document.createElement("div");
    balloon.classList.add("TEAM_D_ANI_B"); //create new div

    //balloon size
    let size = 50;
    balloon.style.width = size + "px"; //convert it in px for the css
    balloon.style.height = size + "px";

    //random starting position + convert it in px for the css
    balloon.style.left = Math.random() * (boundingBoxParent.width - size) + "px"; //horizontal
    balloon.style.top = Math.random() * (boundingBoxParent.height - size) + "px";//vertical

    //random starting balloon color
    balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    parentCanvas.appendChild(balloon); //adding balloon to the canvas

    //mouseover eventListener
    balloon.addEventListener("mouseover", balloonColors);

    //function balloonColors
    function balloonColors() {
      balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    }

    //bounce off the canvas (referenced from last week's material)
    let speedX = 1.5
    let speedY = 1.5

    function animate() {
      balloon.style.left = parseInt(balloon.style.left) + speedX + "px";
      balloon.style.top = parseInt(balloon.style.top) + speedY + "px";
      checkBounds(parentCanvas, balloon);
      requestAnimationFrame(animate);
    }

    function checkBounds(parent, balloon) {
      let bounds = parent.getBoundingClientRect();
      let left = parseInt(balloon.style.left);
      let top = parseInt(balloon.style.top);

      if (left <= 0 || left >= bounds.width - size) {
        speedX *= -1;
      }
      if (top <= 0 || top >= bounds.height - size) {
        speedY *= -1;
      }
    }
    animate();
  }

  /****************ANI C ************************************ */
  /** PUT ALL YOUR CODE FOR INTERACTIVE PATTERN C INSIDE HERE */
  /****************ANI C************************************ */
  /**************** TASK *******************************************
   * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:)
   * 1: use the PROVIDED keyup/down callbacks `windowKeyDownRef` and/or `windowKeyUpnRef` to handle keyboard events
   * 2: create an interactive pattern/sketch based on keyboard input. Anything goes.
   * 
   * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
   * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
   * this is so that your styles are not overriden by other teams.
   * NOTE::: All your code is to be added here inside this function -
   * remember you can define other functions inside....
   * Do not change any code above or the HTML markup.
   * **/

  /* TASK: make an interactive pattern .. colors, shapes, sizes, text, images....
   * using  ONLY key down and/or keyup -- any keys::
   */

  function aniC(parentCanvas) {
    console.log("in ani-C -teamD");

    /*** THIS IS THE CALLBACK FOR KEY DOWN (* DO NOT CHANGE THE NAME *..) */
    windowKeyDownRef = function (e) {
      //code for key down in here
      console.log(e);
      console.log("d-down");
    };

    /*** THIS IS THE CALLBACK FOR KEY UP (*DO NOT CHANGE THE NAME..) */
    windowKeyUpRef = function (e) {
      console.log(e);
      console.log("d-up");
    };

    //set background color  of canvas and the random colors for the boxes
    parentCanvas.style.backgroundColor = "rgba(0, 0, 0, 1)";
    let randomColors = ["#BAE1DD", "#7B1113", "#F88158", "#E7FE40", "#0054B4", "#FF007F"];

    windowKeyDownRef = function (e) {
      //code for key down in here
      console.log(e);
      let box = document.querySelectorAll(".TEAM_D_ANI_C_Div");
      //add a new box when the right arrow is pressed
      if (e.code === "ArrowRight" && box.length < 49) {
        console.log("show");
        let newColor = document.createElement("span");
        let randomIndex = Math.floor(Math.random() * randomColors.length);

        newColor.style.background = randomColors[randomIndex];
        newColor.classList.add("TEAM_D_ANI_C_Div");
        parentCanvas.appendChild(newColor);
      }
      //delete a box when the left arrow is pressed
      else if (e.code === "ArrowLeft") {
        console.log("not show");
        if (box.length !== 0) {
          box[box.length - 1].remove();
        }
      }
    };


    windowKeyUpRef = function (e) {
      //code for key down in here
      if (e.code === "ArrowRight") {
        console.log("right-arrow down");
        console.log("right-arrow up");
      }
    };
    //DO NOT REMOVE
    window.addEventListener("keydown", windowKeyDownRef);
    window.addEventListener("keyup", windowKeyUpRef);
  }




  /****************ANI D************************************ */
  /** PUT ALL YOUR CODE FOR INTERACTIVE PATTERN D INSIDE HERE */
  /****************ANI D************************************ */
  /**************** TASK *******************************************
   * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:).
   * 1: create a creative, visual pattern using text, divs as shapes, images ...
   * 2: add in animation using requestAnimationFrame somewhere to make the sketch animate :)
   *
   * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
   * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
   * this is so that your styles are not overriden by other teams.
   * NOTE::: All your code is to be added here inside this function -
   * remember you can define other functions inside....
   * Do not change any code above or the HTML markup.
   * **/
  function aniD(parentCanvas) {
    console.log("in ani-D -teamD");

    let particleDiv = this.document.createElement("div");
    particleDiv.id = "particle";
    document.querySelector("#parent").appendChild(particleDiv);
    particleDiv.style.left = "10px";
    particleDiv.style.top = "10px";

    window.requestAnimationFrame(animate);

    let speedX = 2;
    let speedY = 3;

    function animate() {
      let p = document.querySelector("#particle");
      p.style.left = parseInt(p.style.left) + speedX + "px";
      p.style.top = parseInt(p.style.top) + speedY + "px";
      console.log("animating");
      window.requestAnimationFrame(animate);
      checkBounds(document.getElementById("parent"), p);
    }

    function checkBounds(parent, p) {
      let bounds = parent.getBoundingClientRect();

      if (parseInt(p.style.left) > bounds.right) {
        speedX *= -1;

      } else if (parseInt(p.style.left) < bounds.left) {
        speedX *= -1;
      }

      if (parseInt(p.style.top) > bounds.bottom) {
        speedY *= -1;

      } else if (parseInt(p.style.top) < bounds.top) {
        speedY *= -1;
      }
    }
  }

}

