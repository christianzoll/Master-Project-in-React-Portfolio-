import React from "react";
import {useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";

function RmList() {
  const [reminder, setReminder] = useState("");  
  const [reminders, setReminders] = useState([]);
  return(
    <div className="rm-list">
    <Header></Header>
    <Body>{reminders}</Body>
    <Footer setReminder={setReminder} setReminders={setReminders}></Footer>
    </div>
  );
}

export default RmList; 