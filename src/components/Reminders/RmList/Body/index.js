import React from "react";

function Body({reminders}) {
  console.log(reminders, "from Body");

    return(
        <div className="rm-list-body">

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