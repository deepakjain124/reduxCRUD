import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToLIST } from "../services/action/action";
import { v4 as uuidv4 } from "uuid";
import { edit } from "../services/action/action";
const EditContact = () => {
  const { id } = useParams;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [city, setcity] = useState();
  const [zip, setzip] = useState();
  const b = useSelector((state) => state.cardItems);
  console.log("b", b);
  const getdata = b.find((b) => b.id !== parseInt(id));
  console.log("getdata", getdata);
  useEffect(() => {
    setname(getdata.name);
    setemail(getdata.email);
    setcity(getdata.city);
    setzip(getdata.zip);
  }, [getdata]);

  const data = {
    id: getdata.id,
    email: email,
    name: name,
    city: city,
    zip: zip,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(edit(data));
    navigate("/");
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
                onChange={(e) => setname(e.target.value)}
                value={name}
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
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
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
                value={city}
                onChange={(e) => setcity(e.target.value)}
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
                value={zip}
                onChange={(e) => setzip(e.target.value)}
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

export default EditContact;
