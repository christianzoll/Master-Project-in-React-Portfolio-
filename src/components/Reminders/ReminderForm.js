import React, { useState }from 'react';
import {v4 as uuidv4} from 'uuid';
function ReminderForm({ addReminder }) {
  const [reminder, setReminder] = useState({ //the object passed to the useState Hook give properties to the useState's variable
    // the return function below describes the look of variable (component)
    // the two are tied together when the JSX of the return function below is given a ***value*** property set to the name of the useState's function
    id:"",
    task: "",
    completed: false 
  });

  function handleTaskInputChange(e) {
    setReminder({ ...reminder, task: e.target.value}); //spelling taks instead of task prevented typing input
  }

    function handleSubmit(e) {
        e.preventDefault();
        if (reminder.task.trim()) {
            addReminder({ ...reminder, id: uuidv4() });
            // reset task input
            setReminder({ ...reminder, task: "" });
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <input
              name="task"
              type="text"
              value={reminder.task}
              onChange={handleTaskInputChange}
            />
            <button type="submit">+</button>
        </form>
    );
}

export default ReminderForm