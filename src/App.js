import { useEffect, useState } from 'react';
import './App.css'
import Die from './components/Die'
import {nanoid} from "nanoid"
import Confetti from 'react-confetti'

function App() {

  // generate an array of 10 random numbers between 1-6 inclusive.
  // { value: <random number>, isHeld: false }
  function generateNewDie() {
    return (
      {
        value: Math.floor(Math.random()*6+1), 
        isHeld: false,
        id: nanoid()
      }
    )
  }

  function allNewDice() {
    let diceArr = [];
    for (let i = 0; i < 10; i++) {
      diceArr.push(generateNewDie())
    }
    return diceArr;
  }

  const [dice, setDice] = useState(allNewDice())
  const diceElements = dice.map(die => <Die 
    value = {die.value} 
    isHeld = {die.isHeld} 
    key={die.id}
    holdDice = {() => holdDice(die.id)} />)

  function rollDice() {
    if (!tenzies) {
      setDice(prevDice => prevDice.map(die => {
        return die.isHeld ? die : generateNewDie()
      }))
    } else {
      setTenzies(false)
      setDice(allNewDice())
    }
    
  }

  function holdDice(id) {
    setDice(oldDice => oldDice.map(die => {
        return die.id === id ? 
            {...die, isHeld: !die.isHeld} :
            die
    }))
  }

  const [tenzies, setTenzies] = useState(false)
  useEffect(() => {
    const allHeld = dice.every(die => die.isHeld)
    const allSameValue = dice.every(die => die.value === dice[0].value)
    if(allHeld && allSameValue) {
      setTenzies(true)

      console.log('win')
    } 
  }, [dice])
 
  return (
    <div>
      <main>
        {tenzies && <Confetti />}
        <div>
          <h1>Tenzies Game</h1>
          <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        </div>      
        <div className="dice-container">
          {diceElements}
        </div>
        <button className='roll-btn' onClick={rollDice}>{tenzies ? 'New Game' : 'Roll'}</button>
      </main>
    </div>
  );
}

export default App;
