import React, { useState } from 'react';

export function AddReminder() {
    const [reminders, setReminders] = useState([]);

function addReminder(reminder)
  setReminders([reminder, ...reminders]);
}