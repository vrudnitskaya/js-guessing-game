const input = document.querySelector("#input");
const button = document.querySelector("#btn");
const randomNumbers = Math.floor(Math.random() * 50)+1;

let guessCount = 1;


button.addEventListener("click", game);

input.addEventListener("keypress", function(e) {
    if (e.keyCode === 13) {
        game();
    }
})

function game() {
    const userGuess = Number(input.value);
    const lowOrHigh = document.querySelector(".lowOrHigh");
    const result = document.querySelector(".result");
    const guesses = document.querySelector(".guesses");

    if (userGuess > 50 || userGuess < 1 ) {
        Swal.fire('Enter a number from 1 to 50!');
        input.value = "";
    }

    else {
        if (guessCount === 1) {
        guesses.textContent = "Your previous guesses: ";
    }
    guesses.textContent += userGuess + ", ";
    
        if (userGuess === randomNumbers) {
            Swal.fire({
            title: 'Congrats! You won!',
            imageUrl: 'https://images.unsplash.com/photo-1508558936510-0af1e3cccbab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmljdG9yeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            imageWidth: 600,
            imageHeight: 400,
            imageAlt: 'Custom image',
            });
            resetGame();
        }
        else if (guessCount === 10) {
            Swal.fire({
                title: 'TRY AGAIN',
                imageUrl: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2FtZSUyMG92ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                imageWidth: 500,
                imageHeight: 300,
                imageAlt: 'Custom image',
                });
            resetGame();
        }
        else {
            if (userGuess < randomNumbers) {
                result.textContent = "WRONG!!!";
                result.classList.add("red");
                lowOrHigh.textContent = "Last number was TOO LOW!";
            }
            else if (userGuess > randomNumbers) {
                result.textContent = "WRONG!!!";
                result.classList.add("red");
                lowOrHigh.textContent = "Last number was TOO HIGH!";
            }
        }
        guessCount++;
        input.value="";
        input.focus();
    }
}

function resetGame() {
    guessCount = 1;
    const reset = document.querySelectorAll("p");
    for (let i = 0; i < reset.length; i++) {
        reset[i].textContent = "";
    }
    input.value = "";

    randomNumbers = Math.floor(Math.random() * 50)+1;
}
