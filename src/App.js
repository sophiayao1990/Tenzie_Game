import './App.css'
import Die from './components/Die'

function App() {




  const num = Math.floor(Math.random()*6+1) 
  return (
    <div>
      <main>
        <div className="dice-container">
          <Die value = {num} />
          <Die value = {num} />
          <Die value = {num} />
          <Die value = {num} />
          <Die value = {num} />
          <Die value = {num} />
          <Die value = {num} />
          <Die value = {num} />
          <Die value = {num} />
          <Die value = {num} />
        </div>
      </main>
    </div>
  );
}

export default App;
