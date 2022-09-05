import './App.css';
import Timeline from './components/Timeline';
import Reminders from './components/Reminders';
import MoneyBuddy from './components/MoneyBuddy';
// import {Calc} from './components/Calc';
import Calc from './components/Calc';

function App() {
  return (
    <div className="App">
      <Timeline />
      <Reminders />
      <MoneyBuddy />
      <Calc />
    </div>
  );
}

export default App;
