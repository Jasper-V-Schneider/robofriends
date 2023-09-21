import React from "react";
import "./Card.css";

let Card = ({ name }) => {
  return (
    <div id="card-container">
      <h1>{name}</h1>
      <div>
        <img
          alt="robot"
          src={`https://robohash.org/${name.toLowerCase()}`}
        ></img>
      </div>
    </div>
  );
};

export default Card;
