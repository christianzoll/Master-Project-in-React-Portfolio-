import React from "react";
function Footer(props){
  return(
    <div className="rm-list-footer">
      <form onSubmit={props.setReminder}>
        <input id='' onChange type="text"/>
        <button type='submit'>+</button>
      </form>
    </div>
  )
}
export default Footer;