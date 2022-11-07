import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";

function RmList() {
  const callThisFromChildComponent = (value) => {
    console.log(value);
  };
  
  return(
    <div className="rm-list">
    <Header></Header>
    <Body></Body>
    <Footer callback={callThisFromChildComponent}></Footer>
    </div>
  );
}

export default RmList; 