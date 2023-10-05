import React, { useState, useEffect } from "react";
import "./App.css";
import CardList from "./CardList";
import Search from "../components/Search";

function App() {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState("");

  useEffect(() => {
    setRobots([
      {
        name: "Bob",
      },
      {
        name: "Tom",
      },
      {
        name: "Nick",
      },
      {
        name: "Cevin",
      },
      {
        name: "Robin",
      },
      {
        name: "Cenk",
      },
      {
        name: "Nils",
      },
      {
        name: "David",
      },
      {
        name: "Elia",
      },
      {
        name: "Lino",
      },
      {
        name: "Basti",
      },
      {
        name: "Sonja",
      },
      {
        name: "Jakob",
      },
      {
        name: "Louis",
      },
      {
        name: "Marisa",
      },
      {
        name: "Sarah",
      },
      {
        name: "Ben",
      },
      {
        name: "Niclas",
      },
    ]);
  }, []);

  const onSearch = (event) => {
    setSearchfield(event.target.value);
  };

  return (
    <div id="app-container">
      <Search handleChange={onSearch} />
      <CardList input={searchfield} robots={robots} />
    </div>
  );
}

export default App;
