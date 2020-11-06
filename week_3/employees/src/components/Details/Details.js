import React from "react";
import Card from "../Card/Card";

function Details(props) {
  const { name, info, dob, photo } = props;
  return (
    <div className="detailsWrapper">
      <Card name={name} info={info} dob={dob} photo={photo} />
    </div>
  );
}

export default Details;
