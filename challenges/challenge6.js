const form = document.querySelector("form");
const maxNumInput = form.querySelector(".max-number input");
const guessNumInput = form.querySelector(".guess-number input:nth-child(2)");
const resultContainer = document.querySelector(".result-container");
const guessNumEnter = document.querySelector(".result-container .guess-number-enter");
const result = document.querySelector(".result-container .result");
const resultMessage = document.querySelector(".result-container .result-message");


function onSubmit(event) {
    event.preventDefault();
    const maxNum = parseInt(maxNumInput.value);
    const guessNum = parseInt(guessNumInput.value);
    resultContainer.classList.remove("hidden");
    guessNumEnter.innerText = guessNum;
    let randomNum = Math.floor(Math.random() * (maxNum+1));
    result.innerText = randomNum;
    if (guessNum === randomNum) {
        resultMessage.innerText = "You won!";
    } else {
        resultMessage.innerText = "You lost!";
    }
}

form.addEventListener("submit", onSubmit);