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
      this.setState({ winner: 'its a tie!!' })
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
      <div>
        <header className="Rock-paper-scissor">

          <div>

            <button onClick={() => this.startGame('paper', this.setComputerInput())} className="choiceButton" id="paper">
              paper</button>
            <button onClick={() => this.startGame('rock', this.setComputerInput())} className="choiceButton" id="rock">
              rock</button>
            <button onClick={() => this.startGame('scissors', this.setComputerInput())} className="choiceButton" id="scissors">
              scissors</button>
          </div>
          <div>{this.state.winner}</div>
        </header>

      </div>
    )
  };

}
export default App;
