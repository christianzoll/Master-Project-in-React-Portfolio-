import React from "react";

function Axis(){
    return(
        <div className="axis">  
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" x2="100" y1="50" y2="50" stroke="orange"></line>
          </svg>
        </div>
    )
}

export default Axis