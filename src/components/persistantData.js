import React, { useEffect } from 'react';
import { ReminderForm } from './ReminderForm';
import { AddReminder } from './AddReminder';

const LOCAL_STORAGE_KEY = "react-reminder-list-reminders"// can be used to store these reminders

export function PersistantData() {

   useEffect(() => {
    const storageReminders = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageReminders) {
        setReminders(storageReminders);
    }
    }, []); // we want to populate our reminders when the app initially renders

    useEffect(() => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(reminders));
    }, [reminders]);
}