import React from "react";
import "./Card.css";

let Card = ({ index }) => {
  const robots = [
    {
      name: "Bob",
      link: "https://robohash.org/bob",
    },
    {
      name: "Tom",
      link: "https://robohash.org/tom",
    },
    {
      name: "Nick",
      link: "https://robohash.org/nick",
    },
    {
      name: "Jasper",
      link: "https://robohash.org/jasper",
    },
    {
      name: "Cevin",
      link: "https://robohash.org/cevin",
    },
    {
      name: "Robin",
      link: "https://robohash.org/robin",
    },
    {
      name: "Cenk",
      link: "https://robohash.org/cenk",
    },
    {
      name: "Nils",
      link: "https://robohash.org/nils",
    },
    {
      name: "David",
      link: "https://robohash.org/david",
    },
  ];

  return (
    <div id="card-container">
      <h1>{robots[index].name}</h1>
      <div>
        <img alt="robot" src={robots[index].link}></img>
      </div>
    </div>
  );
};

export default Card;
