import './App.css'
import Die from './Die'

export default function App() {
  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      const randomNumber = Math.ceil(Math.random() * 6) 
      newDice.push(randomNumber);
    }
    return newDice;
  }
  
  const newDie = allNewDice();
  console.log(newDie);
  return (
      <main>
          <div className="dice-container">
              <Die value="1" />
              <Die value="2" />
              <Die value="3" />
              <Die value="4" />
              <Die value="5" />
              <Die value="6" />
              <Die value="1" />
              <Die value="1" />
              <Die value="1" />
              <Die value="1" />
          </div>
      </main>
  )
}