let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
const user = document.querySelector("#you-score");
const computer = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const idx = Math.floor(Math.random() * 3);
  const compId = options[idx];
  return compId;
};

const msg = document.querySelector("#msg");

const playGame = (userChoice) => {
  console.log("your choices=", userChoice);
  const compChoice = genCompChoice();
  console.log("Computer's Choice is=", compChoice);
  if (userChoice === compChoice) {
    msg.innerText = "Game is Draw! Play again..";
    msg.style.backgroundColor = "#081b31";
  } else if (userChoice === "rock" && compChoice === "paper") {
    msg.innerText = `you lose! ${compChoice} beat your ${userChoice} `;
    msg.style.backgroundColor = "red";
    compScore++;
    computer.innerText = compScore;
  } else if (userChoice === "paper" && compChoice === "scissors") {
    msg.innerText = `You lose! ${compChoice} beat your ${userChoice} `;
    msg.style.backgroundColor = "red";
    compScore++;
    computer.innerText = compScore;
  } else if (userChoice === "paper" && compChoice === "rock") {
    msg.innerText = `You win! your ${userChoice} beat ${compChoice}`;
    msg.style.backgroundColor = "green";
    userScore++;
    user.innerText = userScore;
  } else if (userChoice === "scissors" && compChoice === "paper") {
    msg.innerText = `You win! your ${userChoice} beat ${compChoice}`;
    msg.style.backgroundColor = "green";
    userScore++;
    user.innerText = userScore;
  } else if (userChoice === "rock" && compChoice === "scissors") {
    msg.innerText = `You win! your ${userChoice} beat ${compChoice}`;
    msg.style.backgroundColor = "green";
    userScore++;
    user.innerText = userScore;
  } else if (userChoice === "scissors" && compChoice === "rock") {
    msg.innerText = `You lose! ${compChoice} beat your ${userChoice}`;
    msg.style.backgroundColor = "red";
    compScore++;
    computer.innerText = compScore;
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
