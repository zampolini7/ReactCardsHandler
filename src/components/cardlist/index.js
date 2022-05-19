import React from "react";
import "./index.css";

const CardList = (props) => {
  return <li className="li-cards">{props.children}</li>;
};

export { CardList };
