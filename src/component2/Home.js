import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { delet, edit } from "../services/action/action";
// import { addToCart } from "../services/action/action";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cardItems);
  console.log("data", data);

  const editdata = (data) => {
    navigate(`/edit/${data}`);
  };

  return (
    <div>
      <div className="container">
        <div className="heading text-center">
          <h1>Contact App</h1>
        </div>
        <div className="add mb-5">
          <Link to="/add">
            <button type="button" class="btn btn-dark">
              AddContact
            </button>{" "}
          </Link>
        </div>
        <div className="tabledata ">
          <table class="table table-dark table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">name</th>
                <th scope="col">email</th>
                <th scope="col">city</th>
                <th scope="col">zip</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            {data.length > 0 ? (
              <tbody>
                {data.map((data, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{index}</th>
                      <td>{data.name}</td>
                      <td>{data.email}</td>
                      <td>{data.city}</td>
                      <td>{data.zip}</td>
                      <td>
                        {" "}
                        <button
                          type="button"
                          class="btn btn-primary"
                          onClick={
                            () => editdata(data.id)
                            // navigate(`/edit/${data.id}`))
                          }
                        >
                          Edit
                        </button>{" "}
                      </td>
                      <td>
                        <button
                          type="button"
                          class="btn btn-primary"
                          onClick={() => dispatch(delet(data.id))}
                        >
                          Delete
                        </button>{" "}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            ) : (
              <p className="text-center" style={{ color: "black" }}>
                no data to {data.name} sshow
              </p>
            )}
          </table>
        </div>
      </div>
    </div>
  );
}
export default Home;
