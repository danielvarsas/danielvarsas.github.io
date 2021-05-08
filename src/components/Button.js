import React from "react";

function Button(props) {
  return (
    <a href={props.linkTo}>
      <button className={props.button}>{props.text}</button>
    </a>
  );
}

export default Button;
