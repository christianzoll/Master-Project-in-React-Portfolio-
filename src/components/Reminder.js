import React from 'react';



export function Reminder({ reminder }) {
    return(
        <>
        <input style={{ display: "flex" }}type="radio" />
          <li>{reminder.task}</li>
        </>
    )
}