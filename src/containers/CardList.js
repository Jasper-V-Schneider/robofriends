import React from "react";
import Card from "../components/Card";
import "./CardList.css";

let CardList = ({ input, robots }) => {
  robots = robots.filter((o) => o.name.includes(input));

  let cards = robots.map((robot) => {
    return <Card name={robot.name} />;
  });
  return <div id="cardlist-container">{cards}</div>;
};

export default CardList;
