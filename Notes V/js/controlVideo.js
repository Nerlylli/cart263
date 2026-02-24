window.onload = function () {
    console.log("go")

    let canvas = document.getElementById("videoCanvas");
    let context = canvas.getContext("2d");

    let video = document.getElementById("video");
    let playButton = document.getElementById("play");
    let pauseButton = document.getElementById("pause");

    let filterButton_blur = document.getElementById("filter_button_blur");
    let blurInput = document.getElementById("blurnum");

    let filterButton_hue = document.getElementById("filter_button_hue");
    let hueInput = document.getElementById("huenum");

    let userProvidedBlur = 0;
    let userProvidedDeg = 0;


    playButton.addEventListener("click", function () {
        video.play();
    });

    pauseButton.addEventListener("click", function () {
        video.pause();
    });

    video.loop = true;

    filterButton_blur.addEventListener("click", function () {
        //get value from input field
        userProvidedBlur = blurInput.value;
        console.log(userProvidedBlur)
    });

    filterButton_hue.addEventListener("click", function () {
        //get value from input field
        userProvidedDeg = hueInput.value;
        console.log(userProvidedDeg)
    });

    /*** instead of using the video object we can use the canvas **/
    requestAnimationFrame(run);
    function run() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.save(); //like push() in p5
        //add image
        context.filter = `blur(${userProvidedBlur}px)`;
        context.filter = `hue-rotate(${userProvidedDeg}deg)`
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        context.fillStyle = "#ff00b3";

        context.fillRect(canvas.width / 2 + 50, canvas.height / 2, 50, 50);
        context.fill();
        context.restore();//like pop() in p5
        requestAnimationFrame(run);
    }


}