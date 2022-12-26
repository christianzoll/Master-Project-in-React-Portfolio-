import React, { useState } from "react";
import RmList from "./RmList";
import Header from "../../components/Header";

import './reminders.css';

function Reminders(){

        return(
        <div className="reminders"> 
          <Header name="Reminders"/>
          <RmList></RmList>
        </div>

        //APPLE'S REMINDER APP DOM **Clone this**
        /*
            <div class="main-view"> //replaced with className="reminders"
              <div class="sidebar regular"> 
              <div class="rm-list"
            </div>

            //SO YOU'RE GOING TO CREATE A COMPONENT FOR THE SIDEBAR and COMPONENT FOR THE RM-LIST
              
        */
        );
    }

export default Reminders;