//How to access our codes through console (inspect) in the GoLive! version
window.onload = setup
function setup() {
    // console.log(document.getElementById("one"));
    // console.log(document.querySelector("#one"));

    // console.log(document.getElementsByTagName("div"));

    // let allDivs = document.getElementsByTagName("div");
    // console.log(allDivs.length);

    // console.log(document.querySelector("div p"));

    // console.log(document.getElementsByClassName("square_shape"))

    // console.log(document.querySelector("#five").getAttribute("id"));
    // console.log(document.querySelector("#one").style.background);

    // console.log(document.querySelectorAll("span")[0].parentElement); //the parent is what the thing is contained into

    // console.log(document.querySelector(".wrapper_flex_box").children)

    document.getElementById("two").children[0].innerHTMl = "<h2> Hello JS </h2>";

    let childrenOfTwo = document.getElementById("two").children;
    for (let i = 0; i < childrenOfTwo.length; i++) {
        childrenOfTwo[i].textContent = "Hello NERLY";
    }

    document.querySelector(".square_shape").classList.add("another_class")
    document.querySelector("h1").setAttribute("id", "newId")

    /**newElement*/
    let newDiv = document.createElement("div");
    newDiv.classList.add("square_shape");
    newDiv.innerHTML = " NEW ELEMENT";
    // newDiv.style.backgroundColor = "purple";
    /**across parent element*/
    let parentElement = document.querySelector(".wrapper_flex_box");
    parentElement.appendChild(newDiv)


    /**Removing elements from the DOM;document object model */
    let parentElementToRemoveFrom = document.querySelector(".wrapper_flex_box");
    let toRemove = document.getElementById("six");
    parentElementToRemoveFrom.removeChild(toRemove);

    // console.log("running setup");

}

