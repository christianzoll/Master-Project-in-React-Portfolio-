import React, { useEffect, useState } from 'react';
import './style.css'

function Footer({ reminders, setReminders }){
  const [reminder, setReminder] = useState("");  
  
  const submitThis = (e) => {
      e.preventDefault();
      if (reminder){
        let newReminder = {
          reminder: reminder,
          complete: false,
         };
         setReminders([...reminders, newReminder])
         setReminder('');
     } else {
      setReminder("oops there's a problem");
    }
  };

  useEffect(
    () => { localStorage.setItem('reminders', JSON.stringify(reminders)); }, 
    [reminders]
  );

  return(
    <div className="rm-list-footer">
      <form onSubmit={submitThis}>
        <input 
          id='newReminder' 
          type='text'
          value={reminder}
          onChange={(e) => setReminder(e.target.value)}
        />
        <button onClick={() => setReminders(reminders)} type='submit'>+</button>
      </form>
    </div>
  )
}

export default Footer;