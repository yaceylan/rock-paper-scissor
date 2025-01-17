const startScreen = document.getElementById('startscreen');
const startButton = document.getElementById('startbutton');
const rulesButton = document.getElementById('rulesbutton');
const scoreElement = document.getElementById('score');
const resultsElement = document.getElementById('results');
const choices = document.querySelectorAll('button[data-choice]');

let playerScore = 0; // Spielstand verfolgen
let computerScore = 0;

// Funktion zum Aktualisieren des Spielstands
function updateScore() {
  scoreElement.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
}
// Funktion zum Zufälligen Auswählen des Computers
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex].dataset.choice;
}
// Funktion zum Spielen einer Runde
function playRound(playerChoice) {
  const computerChoice = getComputerChoice();
// Bedingung überprüft, ob Spieler und Computer das gleiche gewählt haben
  if (playerChoice === computerChoice) {
    resultsElement.textContent = "Draw!";
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||  // Bedingung überprüft, ob Spieler gewonnen hat
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    playerScore++; // Spieler erhält einen Punkt
    resultsElement.textContent = "You won!";
  } else {
    computerScore++;
    resultsElement.textContent = "You lost!";
  }
  updateScore();
}
// 
choices.forEach(button => { // Schleife, die jedem Button einen EventListener hinzufügt
  button.addEventListener('click', () => {
    const playerChoice = button.dataset.choice;
    playRound(playerChoice);
  });
});

// Verknüpft den Start-Button mit der startGame-Funktion
startButton.addEventListener('click', startGame);

// Funktion zum Starten des Spiels 
function startGame() {
    startScreen.style.display = 'none'; // Startbildschirm wird ausgeblendet
}




