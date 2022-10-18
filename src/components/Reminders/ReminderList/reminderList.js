import React from "react";
import ReminderItem from "../ReminderItem/reminderItem";

class ReminderList extends React.Component {

    render() {

        const { reminders } = this.props;

        return(
        <div className="reminderListContainer">
            {
                reminders.map((_reminder, _index) => {
                    return(
                        <ReminderItem updateReminderFn={this.updateReminder} key={_index}>{_reminder}</ReminderItem>
                    )
                })
            }
            </div>
        );
    }

    updateReminder = (reminder) => {
        this.props.updateReminderFn(reminder);
    }
}

export default ReminderList;