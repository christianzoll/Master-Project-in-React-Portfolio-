// App.js HOC
import React, { useEffect, useState } from 'react';
import ReminderForm from './ReminderForm';
import ReminderList from "./ReminderList";

const LOCAL_STORAGE_KEY = "react-reminder-list-reminders";

function Reminders(){
        const [reminders, setReminders] = useState([]);

        useEffect(() => {
          const storageReminders = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
          if (storageReminders) {
            setReminders(storageReminders);
          }
        }, []);



        useEffect(() => {
          localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(reminders));
        }, [reminders]);

        function addReminder(reminder) {
            setReminders([reminder, ...reminders]);
        }
        function toggleComplete(id) {
            setReminders(
                reminders.map(reminder => {
                    if (reminder.id === id) {
                        return { 
                            ...reminder,
                            completed: !reminder.completed
                        };
                    }
                    return reminder;
                })
            )
        }

        function removeReminder(id){
            setReminders(reminders.filter(reminder => reminder.id !== id));
        }

        return(
            <div className="reminders">
                <ReminderForm addReminder={addReminder} />
                <ReminderList 
                   reminders={reminders} 
                   toggleComplete={toggleComplete}
                   removeReminder={removeReminder}
                   />
            </div>
        );
    }


export default Reminders;