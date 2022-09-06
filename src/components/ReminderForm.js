import React, { useState } from 'react';
import { AddReminder } from './AddReminder'
import { uuid } from "uuid";

export function ReminderForm( { addReminder }) {  // encloses event listener function, default form values, and form's HTML/JSX

  const [reminder, setReminder] = useState({ //lifecycle of form's value and data submissions; extracts reminders from their array

    id: "", // provides reminder.id made available for use in other components that recieve props

    task: "", // text describing reminder; provides reminder.task to components that recieve it's props
    completed: false
  });

  function handleTaskInputChange
  (e) // event received from button's form press
  { //value for onChange prop
    setReminder({  // link with useState hook; updates task property on reminder object
      ...reminder, // passes existing reminders into 
      task: e.target.value //adds new value to reminder object
    
    });
  }

  function handleSubmit (e) {
    e.preventDefault();
    if (reminder.task.trim()) {
      addReminder({ ...reminder, id: uuid.v4() });

      setReminder({ ...reminder, task: "" }); //reset task input form
    }
  }

    return (
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="task"
            value={reminder.task}
            onChange={handleTaskInputChange}
          />
          <button>+</button>
        </form>
    )
}

