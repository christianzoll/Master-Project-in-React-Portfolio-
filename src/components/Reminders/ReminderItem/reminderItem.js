import React from "react";
import './style.css';
class ReminderItem extends React.Component {

    render() {
        
        const { reminder } = this.props;
        
        return(
        <div className={'reminderItem' + (reminder.completed ? 'completed' : '')} onClick={this.toggleReminder}>{reminder.text}</div>
     );
    }

    toggleReminder = () => {
        this.props.updateReminderFn(this.props.reminder)
    }
}

export default ReminderItem; 