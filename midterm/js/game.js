window.onload = function () {
    //opening page
    const startButton = document.querySelector('.startButton');
    //instructions page
    const instructions = document.getElementById("instructions");
    const playButton = document.getElementById("playButton");
    //losing page
    const restartButton = document.querySelectorAll("#restartButton");
    const gameOver = document.getElementById("gameOver");
    //winning page
    const gameWin = document.getElementById("gameWin");



    //after clicking startButton, instructions page shows up
    startButton.addEventListener('click', function () {
        startButton.style.display = 'none';
        instructions.style.display = 'block';
    });

    //after clicking restartButton, game page shows up
    restartButton.forEach(button => {
        button.addEventListener("click", function () {
            gameOver.style.display = 'none';
            gameWin.style.display = 'none';
            location.reload();
        })
    })

    //after clicking playButton, game page shows up
    playButton.addEventListener('click', function () {
        instructions.style.display = 'none';
        startGame();
    });

    function startGame() {
        //defining the constants (snake, tragets)
        const snake = new Snake(10, 10);
        const targetOne = new Target();
        const targetTwo = new Target();
        // defining the birds
        let birds = [];
        window.currentBirds = birds;

        //SCORE
        let score = 0; //default at zero
        const scoreCounter = document.getElementById("score");
        scoreCounter.textContent = "Score: 0";
        function increaseScore() { //updates score by adding one each time
            score++;
            scoreCounter.textContent = "Score: " + score;

            //Win page appears when score gets to 50
            if (score >= 50) {
                startButton.style.display = 'flex';
                gameWin.style.display = "flex";
            }
        }
        function resetScore() { //resets score back to zero
            score = 0;
            scoreCounter.textContent = "Score: " + score;
        }
        function decreaseScore() {
            score--;
            scoreCounter.textContent = "Score: " + score;
        }

        setInterval(function () {
            birds.push(new Bird());
        }, 3000);

        setInterval(function () {
            snake.move();

            if (snake.resetSnake) {
                resetScore();
                snake.resetSnake = false;
            }

            if (snake.checkCollision(targetOne, "target")) increaseScore();
            if (snake.checkCollision(targetTwo, "target")) increaseScore();

            // Check collision for all birds
            for (let i = 0; i < birds.length; i++) {
                if (snake.checkCollision(birds[i], "bird")) {
                    decreaseScore();
                }
                birds[i].renderBird();
            }

            snake.renderSnake();
            targetOne.renderTarget();
            targetTwo.renderTarget();

        }, 200);
    }
}