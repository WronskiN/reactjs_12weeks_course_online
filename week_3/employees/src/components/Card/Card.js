import React from "react";

function Card(props) {
  const { name, info, dob, photo } = props;
  return (
    <div className="card">
      <div className="cardPhoto">
        <img className="cardImg" src={photo} alt={name} />
      </div>
      <article className="cardArticle">
        <h2 className="cardName">{name}</h2>
        <p className="cardAge">DOB: {dob}</p>
        <p className="cardBio">{info}</p>
      </article>
    </div>
  );
}

export default Card;
