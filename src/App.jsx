
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
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
