import React from "react";

const Alltransaction = ({ cur, typeinc, typeexp }) => {
  if (typeinc === "Income") {
    const border = {
      borderRight: "green",
    };
  } else if (typeexp === "Expense") {
    const border = {
      borderRight: "red",
    };
  }
  return (
    <div>
      <div className="kharcha">
        <p>{cur.type}</p>
        <p>{cur.desc}</p>
      </div>
    </div>
  );
};

export default Alltransaction;
