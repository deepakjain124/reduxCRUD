import React from "react";
import "../Home/Home.css";
import Transactioncomponent from "./Transactioncomponent";
const HomeComponent = () => {
  return (
    <div>
      <div className="box">
        <Transactioncomponent />
      </div>
    </div>
  );
};

export default HomeComponent;
