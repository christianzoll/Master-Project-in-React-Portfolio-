import React, { useEffect } from "react";
import "./style.css"

function Body({reminders, setReminders}) {
  console.log(reminders, "from Body");

  useEffect(() => {
    const reminders = JSON.parse(localStorage.getItem('reminders'));
    if (reminders) {
      setReminders(reminders);
    }
  }, []);

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