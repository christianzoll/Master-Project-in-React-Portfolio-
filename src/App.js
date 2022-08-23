import './App.css';
import Timeline from './components/Timeline';
import ToDoList from './components/ToDoList';
import MoneyBuddy from './components/MoneyBuddy';
// import Calculator from './components/Calculator';

function App() {
  return (
    <div className="App">
      <Timeline />
      <ToDoList />
      <MoneyBuddy />
      {/* <Calculator /> */}
    </div>
  );
}

export default App;
