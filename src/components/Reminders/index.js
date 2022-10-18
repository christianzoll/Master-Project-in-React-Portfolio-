import React from "react";
import ReminderItem from "./ReminderItem/reminderItem";
import ReminderList from "./ReminderList/reminderList";
import AddReminder from "./AddReminder/addReminder";

class Reminders extends React.Component {

//ALRIGHT SO, THIS IS THIS FILE'S SIGNATURE 
//IN LOCAL STORAGE THIS IS CATEGORIZED AS OUR KEY
  constructor(){
    super();
    this.state = {
        reminders: []
    };
  }

//THIS IS THIS FILE'S EXPORT
    render() {
        return(
            <div className="reminders">
               <AddReminder addReminderFn={this.addReminder}></AddReminder>
               <ReminderList updateReminderFn={this.updateReminder} reminders={this.state.reminders}></ReminderList>
            </div>
        );
    }

//THIS TURNS DATA INTO STRING WHICH IS REQUIRED BY LOCALSTORAGE
    componentDidMount = () => {
        const reminders = localStorage.getItem('reminders');
        if(reminders) {
            const savedReminders = JSON.parse(reminders);
            this.setState({ reminders: savedReminders}); //reads "what do we want to set the reminders as?"
        } else {
            console.log('No reminders');
        }
    }
//THIS IS THE FUNCTION THAT OUR PARENT FUNCTION 'RETURN'S
//IT HANDLES THE RECEVIED DATA FROM THE PROP THAT'S ASSIGNED TO IT IN OUR RENDER FUNCTION
    addReminder = async (reminder) => {
        await this.setState({ reminders: [...this.state.reminders, { 
            text: reminder,
            completed: false
        }] });
        localStorage.setItem('reminders', JSON.stringify(this.state.reminders));
        console.log(localStorage.getItem('reminders'))
  };

  updateReminder = async (reminder) => {
    const newReminders = this.state.reminders.map(_reminder => {
        if(reminder === _reminder)
        return {
            text: reminder.text,
            completed: !reminder.completed
        }
        else 
        return _reminder
    });
    await this.setState({ reminders: newReminders });
    localStorage.setItem('reminders', JSON.stringify(this.state.reminders));
  }


}

export default Reminders;