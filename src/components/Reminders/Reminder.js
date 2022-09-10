import React from "react";
// IS AN IMPORT MISSING???
function Reminder({ reminder, toggleComplete, removeReminder }) {
  function handleCheckboxClick() {
    toggleComplete(reminder.id);
  }

  function handleRemoveClick() {
    removeReminder(reminder.id)
  }
    return (
    <div style={{ display: "flex" }}>
      <input type="checkbox" onClick={handleCheckboxClick} />
      <li
       style={{
        backgroundColor: "rgba(255,255,255, .5)",
        zIndex: 1000,
        color: "silver",
        textDecoration: reminder.completed ? "line-through": null
       }}
      >
        {reminder.task}</li>
      <button onClick={handleRemoveClick}>X</button>
      </div>      
    );
}

export default Reminder;