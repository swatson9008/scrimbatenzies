import React from "react"
import Die from "./Die"
import {nanoid} from "nanoid"
import Confetti from 'react-confetti'


export default function App() {

    const [dice, setDice] = React.useState(allNewDice())
    const [turnCount, setTurnCount] = React.useState(0);
    const [tenzies, setTenzies] = React.useState(false);

    React.useEffect(() => {

      const allDiceHeld = dice.every(die => die.isHeld === true);
      const sameValue = dice.every(die => die.value === dice[0].value);
      if (allDiceHeld && sameValue === true){setTenzies(true)}
    
    }, [dice]);
    
    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push({
              value: Math.ceil(Math.random() * 6), 
              isHeld: false,
              id: nanoid()
            })
        }
        return newDice
    }
    
    function rollDice() {
      if (tenzies) {
        setDice(allNewDice());
        setTenzies(false);
        setTurnCount(0)
      }
      else {
        setDice(prevDice => {
          return prevDice.map(die => {
            if (die.isHeld === true) {
              return {
                ...die,
              }
            }
            else (die.value = Math.ceil(Math.random() * 6))
            return die
          })
        })
        setTurnCount(prevTurnCount => prevTurnCount + 1);
      }
    }
    
    console.log(dice)

    function holdDice(id) {
      setDice(prevDice => {
        return prevDice.map(die => {
          if (die.id === id) {
            return {
              ...die,
              isHeld: !die.isHeld
            }
          }
          return die
        })
      })
    }

    const diceElements = dice.map(die => <Die 
        key={die.id} 
        value={die.value} 
        isHeld={die.isHeld}
        holdDice={() => holdDice(die.id)}
        />)
    
    return (
        <main>
            {tenzies && <Confetti />}
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls. See how low your turn count can go before you win!</p>
            <div className="dice-container">
                {diceElements}
            </div>
            <button className="roll-dice" onClick={rollDice}>{tenzies ? 'New Game' : 'Roll Dice'}</button>
            <div>Roll Count: {turnCount}</div>
        </main>
    )
}