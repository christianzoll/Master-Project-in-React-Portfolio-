import React from "react";

class AddReminder extends React.Component {
    render() {
        return(<div className=''>
            <form onSubmit>
                <input id='' onChange type="text"/>
                <button type='submit'>+</button>
            </form>
        </div>
        );
    }
}

export default AddReminder; 