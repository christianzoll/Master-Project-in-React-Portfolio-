// App.js HOC

import React, { useEffect, useState } from 'react'
import { AddReminder } from './AddReminders'
import { Reminder } from './Reminder'
//App.js 


import { ReminderForm } from './ReminderForm'
class Reminders extends React.Component{
    render(){
        return(
            <div className="reminders">
                <ReminderForm AddReminder={AddReminder} />
            </div>
        );
    }
}

export default Reminders;