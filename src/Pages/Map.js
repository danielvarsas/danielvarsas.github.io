import React, { useState, useReducer } from "react";
import SimpleMap from "../components/SimpleMap";
import Filter from "../components/Filter";

function Map() {
  const [city, setCity] = useState("szeged");
  // const [zip, setZip] = useState("");
  // const [type, setType] = useState("all");
  // const [isAccepting, toggleIsAccepting] = useToggle();

  function useToggle(initialValue = false) {
    return useReducer((state) => !state, initialValue);
  }

  return (
    <div style={{ paddingTop: 50 }} className="map-container">
      <div className="filter">
        <Filter onChange={(value) => setCity(value)} city={city} />
      </div>
      <div className="map">
        <SimpleMap city={city} />
      </div>{" "}
    </div>
  );
}

export default Map;
