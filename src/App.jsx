
let playerInput = 'paper'

const setComputerInput = () => {
  let computerInput
  let number = Math.floor(Math.random() * 3)
  if (number === 0) {
    computerInput = 'paper'
  } else if (number === 1) {
    computerInput = 'rock'
  } else {
    computerInput = 'scissors'
  };
  return computerInput
};

const startGame = (playerInput, computerInput) => {
  if (playerInput === computerInput) {
    console.log("it's a tie!")
  } else if (playerInput === 'paper' && computerInput === 'scissors') {
    console.log('You lost!')
  } else if (playerInput === 'rock' && computerInput === 'paper') {
    console.log("You lost!")
  } else if (playerInput === 'scissors' && computerInput === 'rock') {
    console.log("You lost!")
  } else if (playerInput === 'scissors' && computerInput === 'paper') {
    console.log("You win!")
  } else if (playerInput === 'rock' && computerInput === 'scissors') {
    console.log("You win!")
  } else if (playerInput === 'paper' && computerInput === 'rock') {
    console.log("You win!")
  } 
}
startGame(playerInput, setComputerInput()) 

function App() {
  return (
    <div>
      <header className="Rock-paper-scissors">
      <body>
        <button>Paper-Button</button>
        <button>Rock-Button</button>
        <button>Scissors-Button</button>
      </body>
      </header>
    </div>
  );
}

export default App;
