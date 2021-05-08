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
      <div className="d-flex flex-column buttonbox">
        <Button
          className="buttonbox"
          text="Keresek"
          button="button"
          linkTo="./terkep"
        />
        <Button
          className="buttonbox"
          text="Regisztrálok"
          button="button reg"
          linkTo="./regisztracio"
        />
      </div>
    </div>
  );
}

export default Header;
