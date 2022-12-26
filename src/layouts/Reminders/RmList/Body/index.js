import React, { useEffect } from "react";
import "./style.css"
import {fetchReminders}  from '../../../../services/fetchReminders'

function Body({reminders, setReminders}) {
  console.log(reminders, "from Body");

  useEffect(() => {
    const reminders = JSON.parse(localStorage.getItem('reminders'));
    if (reminders) {
      setReminders(reminders);
    }
  }, []);

fetchReminders();

  return(
    <div className="rm-list-body">
      {reminders.map((reminderItem) => {
        const { reminder, completed } = reminderItem;
         return(
          <div className="reminder-card">
            <input type="checkbox"></input>
            <p>{reminder}</p>  
          </div>
         )
      })}    
    </div>
    );
}

export default Body;