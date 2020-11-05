import React, { useState } from "react";
import { Header, Image, Description, Footer, ExtendContent } from "./elements";
import "./styles.css";

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

const Card = (props) => {
  const [show, setShow] = useState(false);
  const {
    image,
    date,
    title,
    description,
    paragraph,
    heart,
    shareAlt,
    angleDown,
    angleUp,
    ellipseV,
  } = props;

  return (
    <div style={styles}>
      <Header iconMenu={ellipseV} date={date} title={title} />
      <Image image={image} />
      <Description description={description} />
      <Footer
        heart={heart}
        shareAlt={shareAlt}
        angle={!show ? angleDown : angleUp}
        onClick={() => setShow(!show)}
      />
      {show && <ExtendContent paragraph={paragraph} title={title} />}
    </div>
  );
};

export { Card };
