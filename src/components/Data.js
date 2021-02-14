import React from "react";
import "../App.css";

const Data = ({ items }) => {
  return (
    <div className="container">
      <h2>{items.title}</h2>
      <div className="img">
        <img src={items.url} alt={items.title} />
      </div>
      <div className="details">
        <h3>{items.date}</h3>
        <p>{items.explanation}</p>
      </div>
    </div>
  );
};

export default Data;
