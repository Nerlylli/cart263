window.onload = setup;
function setup() {
    console.log("events!")
    let introBoolean = "inactive"
    let s1Boolean = "inactive"

    // let introSection = document.getElementById("intro");
    // introSection.addEventListener("click", mouseIntroHandler);

    let allSections = document.querySelectorAll(".mouseclick-active-section");
    for (let element of allSections) {
        element.addEventListener("click", changeOpacityOfSection);
    }

    function changeOpacityOfSection(e) {
        console.log(this);
        if (this.getAttribute("custom-bool") === "inactive") {
            let classToAdd = `${this.id}-section-active`
            let classToAddP = `${this.id}-section-p-active`
            this.classList.add(classToAdd);
            document.querySelector(`#${this.id} p`).classList.add(classToAddP)

            this.setAttribute("custom-bool", "active")
            console.log(this);
        } else {
            let classToAdd = `${this.id}-section-active`
            let classToAddP = `${this.id}-section-p-active`
            this.classList.remove(classToAdd);
            document.querySelector(`#${this.id} p`).classList.remove(classToAddP)

            this.setAttribute("custom-bool", "inactive")
            console.log(this);
        }
    }

    function mouseIntroHandler(k) {
        console.log("hello World");
        // console.log(k);
        // console.log(this);
        this.classList.add("intro-section-active");
        // this.style.background = 'rgba(214,110,239,0.5)'
        // console.log(document.querySelector(`#${this.id} p`));
        // document.querySelector(`#${this.id} p`).style.background = `rgba(214, 110, 239 ,.75)`;
        // console.log("#" + this.id + "p")

        // this.style.setProperty("opacity", ".5");
        // document.querySelector(`#${this.id} p`).style.setProperty("opacity", ".75");

        document.querySelector(`#${this.id} p`).classList.add("intro-section-p-active");
    }
}