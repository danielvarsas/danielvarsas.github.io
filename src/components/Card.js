import React, { Fragment, useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Card.css";
import { Facebook, Telephone, ChatLeftDots } from "react-bootstrap-icons";

function Card(props) {
  const { name, address, info, type } = props;
  const [visible, setVisible] = useToggle(false);

  function useToggle(initialValue = false) {
    return useReducer((state) => !state, initialValue);
  }

  return (
    <>
      <div
        className="flex-column"
        id="login-container"
        style={{ display: visible ? "block" : "none" }}
      >
        <h5>{props.name}</h5>
        <div class="description">
          {props.address}
          <br />
          {props.info}
        </div>
        <div className="social flex">
          <ChatLeftDots size={30} />
          <Telephone size={30} />
        </div>
      </div>
      <div
        onClick={setVisible}
        className={`${
          type === "priv" ? "profile-img" : "profile-img-store"
        } flex`}
      ></div>
    </>
  );
}

export default Card;
