import React, { Component, useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import Card from "./Card";
import { isCompositeComponentWithType } from "react-dom/test-utils";

const MapApi = "AIzaSyC-ElJ4eqtnKX5ufH3OXSgCeolthMzqJuw";

//SZEGED
let person1name = "Garabolyos";
let person1addr = "Some street 123\n";
let person1info = "Only krumplihéj";
let type1 = "busi";

let person2name = "Kovács István";
let person2addr = "Neverending sqr 3\n";
let person2info = "Only weekends";
let type2 = "busi";

let person3name = "Teszt Elek";
let person3addr = "Short str 523258\n";
let person3info = "Only BIO please";
let type3 = "priv";

//BUDAPEST
let person4name = "Ne Pazarolj";
let person4addr = "Fő u. 79, 1027\n";
let person4info = "ZeroWaste Shop";

let person5name = "Kiss Istvánné";
let person5addr = "Neverending sqr 3\n";
let person5info = "Only weekends";
let coordinate5 = [47.50837858993456, 19.110130539794312];

let person6name = "Pesti Srác";
let person6addr = "Short str 523258\n";
let person6info = "Hagyd az ajtó előtt";
let coordinate6 = [47.447564749649416, 19.18876127257658];

function SimpleMap(props) {
  const [cordinates, setCordinates] = useState(props);

  useEffect(() => {
    setCordinates(props);
  }, [props]);

  // static defaultProps = {
  //   center: { lat: 46.25, lng: 20.15 },
  //   zoom: 13,
  // };

  // if (this.props.city === "szeged") {
  //   defaultProps = {
  //     center: { lat: 46.25, lng: 20.15 },
  //     zoom: 13,
  //   };
  // } else {
  //   center = "47.490466, 19.088455";
  // }

  // render() {
  //   const { city } = this.props;
  //   const zoom = 13;

  //   console.log(this.props.city);
  //   console.log(this.props.zoom);

  let cityZoom = { lat: 46.25, lng: 20.15 };
  let zoom = 13;

  if (props.city === "szeged") {
    cityZoom = { lat: 46.25, lng: 20.15 };
    zoom = 13;
  } else {
    cityZoom = { lat: 47.49, lng: 19.088 };
    zoom = 12;
  }

  //   console.log({ cityZoom });

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <GoogleMapReact
        yesIWantToUseGoogleMapApiInternals
        bootstrapURLKeys={{ key: MapApi }}
        center={cityZoom}
        zoom={zoom}
      >
        {/* SZEGED */}
        <Card
          lat={46.25107150656922}
          lng={20.140593630994307}
          name={person1name}
          address={person1addr}
          info={person1info}
          type={type1}
        />
        <Card
          lat={46.25631278974291}
          lng={20.14699657159912}
          name={person2name}
          address={person2addr}
          info={person2info}
          type={type2}
        />
        <Card
          lat={46.26409319220389}
          lng={20.13288486424085}
          name={person3name}
          address={person3addr}
          info={person3info}
          type={type3}
        />
        {/* BUDAPEST */}
        <Card
          lat={47.510840876335656}
          lng={19.038471149726377}
          name={person4name}
          address={person4addr}
          info={person4info}
        />
        <Card
          lat={coordinate5[0]}
          lng={coordinate5[1]}
          name={person5name}
          address={person5addr}
          info={person5info}
        />
        <Card
          lat={coordinate6[0]}
          lng={coordinate6[1]}
          name={person6name}
          address={person6addr}
          info={person6info}
        />
      </GoogleMapReact>
    </div>
  );
}

export default SimpleMap;
