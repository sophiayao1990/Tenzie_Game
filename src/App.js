import { useState } from 'react';
import './App.css'
import Die from './components/Die'

function App() {

  // generate an array of 10 random numbers between 1-6 inclusive.
  // { value: <random number>, isHeld: false }
  function allNewDice() {
    let diceArr = [];
    for (let i = 0; i < 10; i++) {
      let randomNum = Math.floor(Math.random()*6+1)
      diceArr.push(randomNum)
    }
    return diceArr;
  }
  const [dice, setDice] = useState(allNewDice())
  const diceElements = dice.map(die => <Die value = {die} />)

  function rollDice() {
    setDice(allNewDice())
  }
 
  return (
    <div>
      <main>
        <div className="dice-container">
          {diceElements}
        </div>
        <button className='roll-btn' onClick={rollDice}>Roll</button>
      </main>
    </div>
  );
}

export default App;
