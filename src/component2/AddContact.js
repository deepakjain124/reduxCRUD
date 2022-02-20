import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToLIST } from "../services/action/action";
import { v4 as uuidv4 } from "uuid";
const AddContact = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [state, setstate] = useState({
    name: "",
    email: "",
    city: "",
    zip: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setstate((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const data = {
    id: uuidv4(),
    email: state.email,
    name: state.name,
    city: state.city,
    zip: state.zip,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
    dispatch(addToLIST(data));
  };
  return (
    <div className="container">
      <div className="add mt-5">
        <Link to="/">
          <button type="button" className="btn btn-dark">
            Back
          </button>
        </Link>
      </div>
      <div className=" d-flex justify-content-center align-items-center mt-5">
        <form>
          <div className="form-row">
            <div className="col-md-12 mb-3">
              <label for="validationDefault01"> name</label>
              <input
                type="text"
                className="form-control"
                id="validationDefault01"
                name="name"
                placeholder="First name"
                onChange={handleInput}
                value={state.name}
                required
              />
            </div>

            <div className="col-md-12 mb-3">
              <label for="validationDefaultUsername">Email</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroupPrepend2">
                    @
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="validationDefaultUsername"
                  placeholder="email"
                  name="email"
                  value={state.email}
                  onChange={handleInput}
                  aria-describedby="inputGroupPrepend2"
                  required
                />
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-12     mb-3">
              <label for="validationDefault03">City</label>
              <input
                type="text"
                className="form-control"
                id="validationDefault03"
                name="city"
                value={state.city}
                onChange={handleInput}
                placeholder="City"
                required
              />
            </div>

            <div className="col-md-12 mb-3">
              <label for="validationDefault05">Zip</label>
              <input
                type="text"
                className="form-control"
                id="validationDefault05"
                placeholder="Zip"
                value={state.zip}
                onChange={handleInput}
                name="zip"
                required
              />
            </div>
          </div>
          <div className="form-group"></div>
          <button
            className="btn btn-primary"
            type="submit"
            onClick={handleSubmit}
          >
            Submit form
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddContact;
