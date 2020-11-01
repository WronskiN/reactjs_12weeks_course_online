import React, { useState } from "react";
import { Header, Image, Description, Footer, ExtendContent } from "./elements";
import "./styles.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEllipsisV,
  faHeart,
  faAngleDown,
  faShareAlt,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faEllipsisV, faHeart, faAngleDown, faAngleUp, faShareAlt);

const heart = <FontAwesomeIcon icon={faHeart} />;
const ellipseV = <FontAwesomeIcon icon={faEllipsisV} />;
const angleDown = <FontAwesomeIcon icon={faAngleDown} />;
const angleUp = <FontAwesomeIcon icon={faAngleUp} />;
const shareAlt = <FontAwesomeIcon icon={faShareAlt} />;

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
