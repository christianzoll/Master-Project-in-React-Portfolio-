import React, { useEffect, useState } from 'react';
import './style.css'

function Footer({reminder, reminders, setReminder, setReminders}){
  
  console.log({reminders, reminder})
  const handleSubmit = (e) => {
      e.preventDefault();
      if (reminder){
        let newReminder = {
          reminder: reminder,
          complete: false,
         };
         setReminders([newReminder, ...reminders])
         setReminder('');
     } else {
      setReminder("oops there's a problem");
    }
  };
  useEffect(() => {
    localStorage.setItem('reminders', JSON.stringify(reminders), [reminders])
  })
  return(
    <div className="rm-list-footer">
      <form onSubmit={handleSubmit}>
        <input 
          id='newReminder' 
          type='text'
          value={reminder}
          onChange={(e) => setReminder(e.target.value)}
        />
        <button type='submit'>+</button>
      </form>
    </div>
  )
}
export default Footer;