import React, { useState, useEffect } from "react";
import Alltransaction from "./Alltransaction";
import { Scrollbars } from "react-custom-scrollbars";
import { v4 as uuidv4 } from "uuid";

const Transactioncomponent = () => {
  const [show, setShow] = useState(false);
  const [amount, setAmount] = useState();
  const [desc, setDesc] = useState();
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [typeinc, setTypeinc] = useState();
  const [typeexp, setTypeexp] = useState();
  const [balance, setBalance] = useState(0);
  const [search, setSearch] = useState();
  const [all, setAll] = useState([]);

  const display = () => {
    setShow(!show);
  };
  const handleAmount = (e) => {
    setAmount(e.target.value);
  };
  const handleDesc = (e) => {
    setDesc(e.target.value);
  };

  const handleinc = (p) => {
    setTypeexp("");
    setTypeinc(p.target.value);
    console.log(p.target.value);
  };
  const handleexp = (e) => {
    setTypeinc("");
    setTypeexp(e.target.value);
    console.log(e.target.value);
  };

  const adddata = () => {
    if (typeinc === "Income") {
      setIncome(Number(income) + Number(amount));
      setBalance(Number(balance) + Number(amount));
      if (amount === "" && desc === "") {
        alert("please fill the fields");
      } else {
        setAll((olditems) => {
          return [...olditems, { type: amount, desc: desc, id: uuidv4() }];
        });
        // localStorage.setItem("data", all);
      }
    } else {
      if (typeexp === "Expense" && amount < balance) {
        setExpense(Number(expense) + Number(amount));
        setBalance(Number(balance) - Number(amount));
        if (amount === "" && desc === "") {
          alert("please fill the fields");
        } else {
          setAll((olditems) => {
            return [
              ...olditems,
              { type: amount, desc: desc, id: new Date().toLocaleTimeString() },
            ];
          });
          //   localStorage.setItem("data", all);
        }
      } else {
        alert("please you can not expense more then balance");
      }
    }
    setAmount("");
    setDesc("");
    console.log(all);
  };

  const filter = (e) => {
    setSearch(e.target.value);
  };
  const latest = () => {
    var a = all.filter((d) => {
      return d.desc === search;
    });
    setAll(a);
  };
  useEffect(() => {
    latest();
  }, [search]);

  return (
    <div>
      <div className="Total_balance">
        <h1>Balance:{balance}</h1>
        <button className="add" onClick={display}>
          {show ? "Cancel" : "Add"}
        </button>
      </div>
      {show && (
        <div className="input_section">
          <div className="inputs">
            <input
              type="text"
              value={amount}
              onChange={handleAmount}
              placeholder="Amount"
            />
            <br />
            <input
              type="text"
              value={desc}
              onChange={handleDesc}
              placeholder="Desc"
            />
            <div className="radios">
              <input
                type="radio"
                id="income"
                name="type"
                value="Income"
                onChange={handleinc}
              />
              <label htmlFor="Expense">Income</label>
              <input
                type="radio"
                name="type"
                id="expense"
                value="Expense"
                onChange={handleexp}
              />
              <label htmlFor="Expense">Expense</label>
            </div>
            <div className="add_transaction">
              <p onClick={adddata}>Add Transaction</p>
            </div>
          </div>
        </div>
      )}

      <div className="types">
        <div className="Expense">
          <p>Expense</p>
          <h2>{expense}</h2>
        </div>
        <div className="Income">
          <p>Income</p>
          <h2>{income}</h2>
        </div>
      </div>

      <div className="Transction">
        <p className="tran_head">Transactions</p>
        <div className="search_field">
          <input
            type="text"
            value={search}
            placeholder="Search"
            onChange={filter}
          />
        </div>
      </div>
      <div className="list">
        {all.map((curr) => {
          return (
            <Alltransaction
              key={curr.id}
              cur={curr}
              typeinc={typeinc}
              typeexp={typeexp}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Transactioncomponent;
