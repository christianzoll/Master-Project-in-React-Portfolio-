import React from 'react';
import './App.css';
import Timeline from './sections/Timeline';
import Reminders from './sections/Reminders';
import MoneyBuddy from './sections/MoneyBuddy';
// import {Calc} from './sections/Calc';
import Calc from './sections/Calculator';


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
