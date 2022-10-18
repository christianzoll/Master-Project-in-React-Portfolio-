import React from "react";

class AddReminder extends React.Component {


//THIS IS OUR SIGNATURE FOR OUR INDIVIDUAL REMINDER  
//IN LOCALSTORAGE THIS IS CATEGORIZED AS OUR KEY'S VALUE  
//"...We want to update the state. So we're going to create a constructor."
  constructor() {
    super();
    this.state = {
        reminder: ''
    };
  }

    render() {
        return(<div className='addReminderContainer'>
            <form onSubmit={(e) => this.submitReminder(e)}>
                <input id='addReminderInput' onChange={(e) => this.updateInput(e)}type="text"/>
                <button type='submit'>+</button>
            </form>
        </div>
        );
    }

    updateInput = (e) => {
      this.setState( { reminder: e.target.value })
    }

//THIS IS OUR PROP FOR OUR EXTERNAL FILE'S RENDER FN (INDEX.JS)
    submitReminder = (e) => {
        e.preventDefault();
        this.props.addReminderFn(this.state.reminder); //THIS PLACES addReminderFn AT OUR KEY'S DISPOSAL AS A PROP WHICH IS SET TO A FUNCTION IN OUR KEY'S CLASS (CLASS IMPLIES 'this' IS USED IN THE DEFINITION)
        document.getElementById('addReminderInput').value = '';
    }
}

export default AddReminder; 