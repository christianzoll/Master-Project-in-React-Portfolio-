import React from "react";

function Body({reminder, reminders}) {

  console.log(reminders);
  return(
        <div className="rm-list-body">

          <li>{reminder}</li>
            <form>
              {//onfocus 
                //radio exists
                //input text field
              //offocus
                //radio disappears
                //input text field turns into paragraph
            }
            </form>
        </div>
    );
}

export default Body;