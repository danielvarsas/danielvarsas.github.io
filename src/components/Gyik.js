import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const data = {
  rows: [
    {
      title: "Phasellus at condimentum est?",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
            ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
            In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
            Fusce sed commodo purus, at tempus turpis.`,
    },
    {
      title: "Consectetur adipiscing elit suspendisse?",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
          ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
          In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
          Fusce sed commodo purus, at tempus turpis.`,
    },
    {
      title: "Purus, at tempus turpis?",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
        ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
        In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
        Fusce sed commodo purus, at tempus turpis.`,
    },
  ],
};

const styles = {
  bgColor: "#c3cda9",
  titleTextColor: "white",
  rowTitleColor: "white",
  // rowContentColor: 'grey',
  // arrowColor: "red",
};

const config = {
  animate: true,
  //arrowIcon: "V",
  //tabFocus: true,
};

function Gyik() {
  return (
    
      <div
        className="gyik"
        style={{
          backgroundColor: "#c3cda9",
          fontSize: 20,
          marginTop: -1,
        }}
      >
        <h1>GY.I.K.</h1> <br />
        <Faq data={data} styles={styles} config={config} />
      </div>

  );
}

export default Gyik;
