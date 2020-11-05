import React from "react";
import "./App.css";
import { Card } from "./components/Card";
import { data } from "./Data";

function App() {
  return (
    <div className="App">
      {data &&
        data.map((el) => (
          <Card
            key={`card=${el.id}`}
            image={el.image}
            title={el.title}
            alt={el.alt}
            date={el.date}
            description={el.description}
            paragraph={el.paragraph}
            heart={el.heart}
            ellipseV={el.ellipseV}
            angleDown={el.angleDown}
            angleUp={el.angleDown}
            shareAlt={el.shareAlt}
          />
        ))}
    </div>
  );
}

export default App;
