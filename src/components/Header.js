import React from "react";
import Button from "./Button";
import logo from "../elements/logofeher.png";

function Header() {
  return (
    <div className="header">
      <div>
        <img src={logo} className="logo" />
      </div>
      <div className="title">
        Komposzt Hoszt <br /> Szeged
      </div>
      <div className="d-flex flex-column">
        <Button text="Keresek" button="button" linkTo="./Map" />
        <Button text="Regisztrálok" button="button reg" linkTo="./Register" />
      </div>
    </div>
  );
}

export default Header;
