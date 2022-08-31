import './App.css';
import Timeline from './components/Timeline';
import ToDoList from './components/ToDoList';
import MoneyBuddy from './components/MoneyBuddy';
import {Calc} from './components/Calc';

function App() {
  return (
    <div className="App">
      <Timeline />
      <ToDoList />
      <MoneyBuddy />
      <Calc />
    </div>
  );
}

export default App;
