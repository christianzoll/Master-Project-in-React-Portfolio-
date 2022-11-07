import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";

function RmList() {
  const [reminder, setReminder] = useState("")
  
  return(
    <div className="rm-list">
    <Header></Header>
    <Body reminder={reminder}></Body>
    <Footer linkToFooter={setReminder}></Footer>
    </div>
  );
}

export default RmList; 