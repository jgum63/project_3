import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Events!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-2.jpg"
              text="Kayaking"
              path="/events"
            />
            <CardItem
              src="images/img-3.jpg"
              text="Diving and Snorkeling"
              path="/events"
            />
          </ul>
          <ul className="cards__items">
            <CardItem src="" text="example" path="/events" />
            <CardItem src="" text="example" path="/events" />
            <CardItem src="" text="example" path="events" />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
