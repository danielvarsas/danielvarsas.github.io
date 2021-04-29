import React from "react";

function Button(props) {
  return (
    <a href="./Map">
      <button className={props.button}>{props.text}</button>
    </a>
  );
}

export default Button;
