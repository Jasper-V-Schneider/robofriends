import "./Card.css";
import React from "react";

let Card = () => {
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

  let robotIndex = Math.floor(Math.random() * (8 - 0) + 0);

  return (
    <section>
      <h1>{robots[robotIndex].name}</h1>
      <div>
        <img alt="robot" src={robots[robotIndex].link}></img>
      </div>
    </section>
  );
};

export default Card;
