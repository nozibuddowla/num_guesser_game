const lower = 1;
const upper = 10;

let correctAnswer = Math.floor(Math.random() * (upper - lower + 1) + lower);
console.log(correctAnswer);

let chances = 3;

const rangeDisplay = document.getElementById(`range`);

const guessInput = document.getElementById(`guessInput`);
let submitButton = document.getElementById(`submitGuess`);

const chancesLeftDisplay = document.getElementById(`chancesLeft`);

const messageDisplay = document.getElementById(`message`);

let restartButton = document.getElementById(`restartGame`);

rangeDisplay.textContent = `${lower} - ${upper}`;

submitButton.addEventListener(`click`, () => {
    const userGuess = parseInt(guessInput.value);

    if (userGuess === correctAnswer) {
        messageDisplay.textContent = `Congratulations! You guessed the correct number!`;
        submitButton.disabled = true;
        restartButton.style.display = `block`;
    } else {
        chances--;

        chances = Math.max(0, chances); // Prevent negative chances

        if (userGuess < correctAnswer) {
            messageDisplay.textContent = `Correct answer is greater!`;
        } else {
            messageDisplay.textContent = `Correct answer is smaller!`;
        }
        chancesLeftDisplay.textContent = chances;
        if (chances === 0) {
            messageDisplay.textContent = `You lose! The correct answer was: ${correctAnswer}`;
            submitButton.disabled = true;
            restartButton.style.display = "block";
            guessInput.disabled = true; // Disable the input field
        }
    }
    guessInput.value = "";
});

restartButton.addEventListener('click', () => {
    correctAnswer = Math.floor(Math.random() * (upper - lower + 1) + lower);
    console.log(correctAnswer);
    chances = 3;
    rangeDisplay.textContent = `${lower} - ${upper}`;
    chancesLeftDisplay.textContent = chances;
    messageDisplay.textContent = "";
    guessInput.value = "";
    submitButton.disabled = false;
    restartButton.style.display = "none";
    guessInput.disabled = false; // Re-enable the input field
})