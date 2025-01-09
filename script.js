const words = [
  'javascript', 'python', 'html', 'css', 'react', 'node', 'angular', 'typescript',
  'github', 'programming', 'algorithm', 'function', 'developer', 'debugging', 'frontend'
];

let currentWord = '';
let score = 0;

const wordDisplay = document.getElementById('word-display');
const userInput = document.getElementById('user-input');
const submitButton = document.getElementById('submit-btn');
const message = document.getElementById('message');
const nextButton = document.getElementById('next-btn');
const scoreDisplay = document.getElementById('score');

// Function to scramble a word
function scrambleWord(word) {
  const scrambled = word.split('').sort(() => 0.5 - Math.random()).join('');
  return scrambled;
}

// Function to load a new word
function loadNewWord() {
  const randomIndex = Math.floor(Math.random() * words.length);
  currentWord = words[randomIndex];
  const scrambled = scrambleWord(currentWord);
  wordDisplay.textContent = scrambled;
  userInput.value = '';
  message.textContent = '';
  nextButton.style.display = 'none';
}

// Function to handle the user's guess
function checkAnswer() {
  const userGuess = userInput.value.trim().toLowerCase();
  if (userGuess === currentWord) {
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
    message.textContent = 'Correct! Well done.';
    nextButton.style.display = 'inline-block';
  } else {
    message.textContent = 'Oops! Try again.';
  }
}

// Event Listeners
submitButton.addEventListener('click', checkAnswer);
nextButton.addEventListener('click', loadNewWord);

// Start the game with the first word
loadNewWord();
cr
