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
    <div className="d-flex flex-column">
      <div>
        <form>
          <div>
            <h4>Város</h4>
            <select
              //value={city}
              className="btn border-dark"
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
          <br />
          <div>
            <h4>Irányítószám</h4>
            {props.city === "szeged" ? (
              <select
                value={zip}
                className="btn border-dark"
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
          <br />
          <div className="form-check">
            <h4>Jellege</h4>
            <input
              class="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              value="private"
              onChange={(e) => setType(e.target.value)}
            />
            <label class="form-check-label" for="exampleRadios1">
              Lakossági
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              value="public"
              onChange={(e) => setType(e.target.value)}
            />
            <label class="form-check-label" for="exampleRadios1">
              Közösségi
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              value="business"
              onChange={(e) => setType(e.target.value)}
            />
            <label class="form-check-label" for="exampleRadios1">
              Üzleti
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              value="all"
              onChange={(e) => setType(e.target.value)}
            />
            <label class="form-check-label" for="exampleRadios1">
              Mind
            </label>
          </div>
          <br />
          <div className="form-check">
            <h4>Jelenleg fogad-e?</h4>
            <input
              type="checkbox"
              class="form-check-input"
              id="isAccepting"
              onChange={toggleIsAccepting}
            />
            <label class="form-check-label" for="isAccepting">
              Jelenleg fogad
            </label>
          </div>
        </form>
      </div>
      <div className="text-left">
        <br />
        <br />
        <br />
        (Ez a rész csak a fejlesztés idejére látszik) <br />
        Backendre továbbítandó:
        <br />
        Város: {props.city} <br />
        Ir.szám.: {zip} <br />
        Jelleg.: {type} <br />
        Fogad-e.: {isAccepting === true ? "true" : "false"}
        <br />
      </div>
    </div>
  );
}

export default Filter;
