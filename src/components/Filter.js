import React, { useState, useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Filter(props) {
  //const [city, setCity] = useState("szeged");
  const [zip, setZip] = useState("");
  const [type, setType] = useState("all");
  const [isAccepting, toggleIsAccepting] = useToggle();

  let centerpoz = { lat: 46.25, lng: 20.15 };

  function useToggle(initialValue = false) {
    return useReducer((state) => !state, initialValue);
  }

  console.log(isAccepting);

  return (
    <div>
      <div className="container" style={{ marginBottom: "10px" }}>
        <form className="row justify-content-around">
          <div className="row">
            <h4>Város</h4>
            <select
              //value={city}
              className="form-control"
              onChange={(event) => props.onChange(event.target.value)}
              name="filterWorkSheetByStatus"
            >
              <option value="szeged" data-reference="szeged">
                Szeged
              </option>
              <option value="budapest" data-reference="budapest">
                Budapest
              </option>
            </select>
          </div>

          <div className="row">
            <h4>Irányítószám</h4>
            {props.city === "szeged" ? (
              <select
                value={zip}
                className="form-control"
                onChange={(e) => setZip(e.target.value)}
                name="filterWorkSheetByStatus"
              >
                {/* Szeged */}
                <option data-belongsto="szeged">6765</option>
                <option data-belongsto="szeged">6978</option>
              </select>
            ) : (
              <select
                value={zip}
                className="btn border-dark"
                onChange={(e) => setZip(e.target.value)}
                name="filterWorkSheetByStatus"
              >
                {/* Budapest */}
                <option data-belongsto="budapest">1011</option>
                <option data-belongsto="budapest">1021</option>
              </select>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Filter;
