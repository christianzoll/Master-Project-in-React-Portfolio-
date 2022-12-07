import React from "react"
import Header from '../../components/Header'

function Timeline() {
    return(
      <div className="timeline">
      <Header name="Timeline"/>
      <div className="timeline">
       <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" x2="100" y1="50" y2="50" stroke="orange"></line>
        </svg>
      </div>
      </div>
      //   console.log('Timeline shows up with the DOMContentLoaded document event listener')
      );
  }
  // }


export default Timeline