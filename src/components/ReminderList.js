
import React from "react";
import Reminder from "./Reminder"

    export function ReminderList({ reminders }) {
        return (
            <ul>
                {reminders.map(reminder => (
                    <Reminder key={reminder.id} reminder={reminder} />
                ))}
            </ul>
        )
    }