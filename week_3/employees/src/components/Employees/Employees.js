import React, { useState } from "react";
import NameList from "../NameList/NameList";
import Details from "../Details/Details";
import ListItem from "../ListItem/ListItem";

function Employees({ data }) {
  const [name, setName] = useState("");
  const [dob, setDOB] = useState("");
  const [info, setInfo] = useState("");
  const [photo, setPhoto] = useState("");

  const handleClick = (el) => {
    setInfo(el.info);
    setName(el.name);
    setDOB(el.dob);
    setPhoto(el.imageURL);
  };
  return (
    <div className="employeesContainer">
      <NameList>
        {data.map((el) => (
          <ListItem key={el.id} onClick={() => handleClick(el)}>
            {el.name} {el.city}
          </ListItem>
        ))}
      </NameList>
      <Details name={name} info={info} dob={dob} photo={photo} />
    </div>
  );
}

export default Employees;
