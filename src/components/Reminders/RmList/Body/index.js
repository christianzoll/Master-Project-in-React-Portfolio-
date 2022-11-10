import React, { useEffect } from "react";

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
        const [{reminder, completed}] = reminders;
         return(
          <div>
            <div></div>
            <p>{reminder}</p>  
          </div>
         )
      })}    
    </div>
    );
}

export default Body;