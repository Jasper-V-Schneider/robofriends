import React from "react";
import "./Search.css";

let Search = ({ handleChange }) => {
  return (
    <div id="search-container">
      <h1>My Robots</h1>
      <input type="search" onChange={handleChange} />
    </div>
  );
};

export default Search;
