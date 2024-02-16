import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./App.css";
import CardList from "./CardList";
import Search from "../components/Search";
import { setSearchfield } from "../actions";

function App({ store }) {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState("");

  useEffect(() => {
    console.log(store.getState());
    setRobots([
      {
        name: "John",
      },
      {
        name: "Sarah",
      },
      {
        name: "Emily",
      },
      {
        name: "David",
      },
      {
        name: "Jennifer",
      },
      {
        name: "Christopher",
      },
      {
        name: "Nils",
      },
      {
        name: "Amanda",
      },
      {
        name: "Daniel",
      },
      {
        name: "Nick",
      },
      {
        name: "Jessica",
      },
      {
        name: "Matthew",
      },
      {
        name: "Ashley",
      },
      {
        name: "James",
      },
      {
        name: "Elizabeth",
      },
      {
        name: "Robert",
      },
      {
        name: "Stephanie",
      },
      {
        name: "William",
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

export default connect()(App);
