import React from "react";
import Reminder from './Reminder'; //So this import the entire HOC default 

function ReminderList({ reminders, toggleComplete, removeReminder }) { // and these props are each of the functions in the HOC; the parent's functions are passed back to the components that are fed into that parent itself
  return(
    <ul>
        {reminders.map(reminder => (
            <Reminder 
              key={reminder.id} 
              reminder={reminder} 
              toggleComplete={toggleComplete}
              removeReminder={removeReminder}/>
        ))}
    </ul>
  )
}

export default ReminderList;