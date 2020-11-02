import React, { useState } from "react";
import { Header, Image, Description, Footer, ExtendContent } from "./elements";
import "./styles.css";
import {
  heart,
  ellipseV,
  angleDown,
  angleUp,
  shareAlt,
} from "./elements/Icons";

const styles = {
  width: 350,
  minHeight: 500,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "0 auto",
  backgroundColor: "white",
  borderRadius: 5,
  boxShadow: "0 10px 6px -6px #777",
};

const Card = () => {
  const [show, setShow] = useState(false);

  return (
    <div style={styles}>
      <Header iconMenu={ellipseV} />
      <Image />
      <Description />
      <Footer
        heart={heart}
        shareAlt={shareAlt}
        angle={!show ? angleDown : angleUp}
        onClick={() => setShow(!show)}
      />
      {show && <ExtendContent />}
    </div>
  );
};

export { Card };
