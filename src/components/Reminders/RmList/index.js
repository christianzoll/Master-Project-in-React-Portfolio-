import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";

function RmList() {
  function getDataFromChild(data){
    console.log(data);
  }
  return(
    <div className="rm-list">
    <Header></Header>
    <Body></Body>
    <Footer getDataFromChild={getDataFromChild}></Footer>
    </div>
  );
}

export default RmList; 