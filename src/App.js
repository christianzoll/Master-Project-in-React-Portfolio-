import React from 'react';
import './App.css';
import Timeline from './layouts/Timeline';
import Reminders from './layouts/Reminders';
import MoneyBuddy from './layouts/MoneyBuddy';
// import {Calc} from './sections/Calc';
import Calc from './layouts/Calculator';


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
