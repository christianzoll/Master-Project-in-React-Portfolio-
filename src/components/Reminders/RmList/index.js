import React from "react";
import {useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";

function RmList() {  
  const [reminders, setReminders] = useState([]);
  return(
    <div className="rm-list">
    <Header></Header>
    <Body>{reminders}</Body>
    <Footer  setReminders={setReminders}></Footer>
    </div>
  );
}

export default RmList; 