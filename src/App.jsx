import './App.css';
import Die from './Die';
import { useState } from 'react';

function allNewDice() {
  const newDice = [];
  for (let i = 0; i < 10; i++) {
    const randomNumber = Math.ceil(Math.random() * 6);
    newDice.push(randomNumber);
  }
  return newDice
}

export default function App() {

  const [diceSets, setDiceSets] = useState(allNewDice());

  const handleNewDice = () => {
    const newDice = allNewDice();
    setDiceSets(newDice)
  }

  return (
    <main>
      <div className="dice-container">
        {diceSets.map((item, index) => (
          <Die key={index} value={item} />
        ))}
      </div>
      <button onClick={handleNewDice} className='diceButton'>Roll Dice</button>
    </main>
  );
}
