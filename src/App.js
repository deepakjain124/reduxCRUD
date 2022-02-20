import React, { useEffect } from "react";
// import "./component/Home/Home.css";
// import HomeComponent from "./component/Home/HomeComponent";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component2/Home";
import AddContact from "./component2/AddContact";
import EditContact from "./component2/EditContact";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddContact />} />
          <Route path="/edit/:id" element={<EditContact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
