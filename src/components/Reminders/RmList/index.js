import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";

function RmList() {
  const [reminders, setReminders] = useState([])
  console.log(reminders, "from Parent");
  return(
    <div className="rm-list">
    <Header></Header>
    <Body reminders={reminders} setReminders={setReminders}></Body>
    <Footer setReminders={setReminders} reminders={reminders}></Footer>
    </div>
  );
}

export default RmList; 