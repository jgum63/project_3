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
              text="move through water in a small water vessel with the aid of a double-bladed paddle"
              path="/events"
            />
            <CardItem
              src="images/img-3.jpg"
              text="Float on the ocean surface whilst exploring the marine life underneath"
              path="/events"
            />
          </ul>
          <ul className="cards__items">
            <CardItem src="images/Beachcombing.png" text="Beachcombing!" path="/events" />
            <CardItem src="images/Fishing.png" text="Fishing!" path="/events" />
            <CardItem src="images/Helicopter.png" text="Helicopter Rides!" path="events" />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
