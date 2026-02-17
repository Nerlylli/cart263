class Sun {
    constructor(x, y, sunColor) {
        //bind member properties
        this.x = x;
        this.y = y;
        this.sunColor = sunColor
        this.vx = 1;
        this.vy = -1;
        this.sunDiv = document.createElement("div");
    }
    renderSun() {
        this.sunDiv.classList.add("sun");
        this.sunDiv.style.background = `rgb(${this.sunColor.r},${this.sunColor.g},${this.sunColor.b})`;
        document.querySelector(".sky").appendChild(this.sunDiv);
    }

    updateSun(event) {
        console.log("sun key");
        console.log(event.key)

        //LINEAR MOVEMENT
        //go up
        if (event.key === "w") {
            console.log("up");
            this.y -= this.vy;
            this.updateDivPos();
        }
        if (event.key === "a") {
            console.log("left");
            this.x -= this.vx;
            this.updateDivPos();
        }
        if (event.key === "s") {
            console.log("down");
            this.y += this.vy;
            this.updateDivPos();
        }
        if (event.key === "d") {
            console.log("right");
            this.x += this.vx;
            this.updateDivPos();
        }

    }
    updateDivPos() {
        this.sunDiv.style.left = this.x + "px";
        this.sunDiv.style.top = this.y + "px";
    }
}