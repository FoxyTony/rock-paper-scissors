import React from 'react';
class App extends React.Component {

  state = {
    playerChoice: "",
    computerChoice: "",
    winner: ""
  };
  setComputerInput = () => {
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

  startGame = (playerInput, computerInput) => {
    this.setState({ playerChoice: playerInput, computerChoice: computerInput })
    if (playerInput === computerInput) {
      this.setState({ winner: 'it is a tie!' })
    } else if (playerInput === 'paper' && computerInput === 'scissors') {
      this.setState({ winner: 'computer wins!' })
    } else if (playerInput === 'rock' && computerInput === 'paper') {
      this.setState({ winner: 'computer wins!' })
    } else if (playerInput === 'scissors' && computerInput === 'rock') {
      this.setState({ winner: 'computer wins!' })
    } else if (playerInput === 'scissors' && computerInput === 'paper') {
      this.setState({ winner: 'you win!' })
    } else if (playerInput === 'rock' && computerInput === 'scissors') {
      this.setState({ winner: 'you win!' })
    } else if (playerInput === 'paper' && computerInput === 'rock') {
      this.setState({ winner: 'you win!' })
    }
  }
  render() {
    return (
      <header className="Rock-paper-scissor">
        <h1>Rock Paper Scissors!</h1>
        <button onClick={() => this.startGame('paper', this.setComputerInput())} className="ui primary basic button" id="paper">
          paper</button>
        <button onClick={() => this.startGame('rock', this.setComputerInput())} className="ui positive basic button" id="rock">
          rock</button>
        <button onClick={() => this.startGame('scissors', this.setComputerInput())} className="ui negative basic button" id="scissors">
          scissors</button>
        <h2>Press a button to play!</h2>
        {this.state.winner && <h2 id="winner-state">{this.state.winner}</h2>}
      </header>
    )
  };
}
export default App;
