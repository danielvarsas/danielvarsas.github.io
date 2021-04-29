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
    <div
      style={{ paddingTop: 80, backgroundColor: 363636 }}
      className="flex-container justify-content:end"
    >
      <div style={{ height: "95vh", width: "60vh" }}>
        <Filter onChange={(value) => setCity(value)} city={city} />
      </div>
      <div style={{ width: "110vh" }}>
        <SimpleMap city={city} />
      </div>{" "}
    </div>
  );
}

export default Map;
