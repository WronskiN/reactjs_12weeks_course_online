import React from "react";
import "./App.css";
import { BlogTile } from "./BlogTile";
import { centerApp } from "./styles";

function App() {
  const posts = [
    {
      id: 1,
      title: "Pilne: Co to był za dzień!",
      intro: "Tego świat jeszcze nie widział",
    },
    {
      id: 2,
      title: "Wszyscy zazdroszą Polakom!",
      intro: "Takiego clickbajtowego tytułu jeszcze nikt nie wymyślił",
    },
    {
      id: 3,
      title: "Adam Małysz Zgolił wąs",
      intro:
        "Po przegranym zakładzie z Piotrem Żyłą nasz mistrz olimpijski zgolił wąsy",
    },
  ];

  return (
    <div className="App" style={centerApp}>
      <h1>Clickbait app</h1>
      {posts.map((el) => (
        <BlogTile key={el.id} title={el.title} intro={el.intro} />
      ))}
    </div>
  );
}

export default App;
