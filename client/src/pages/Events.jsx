import React from "react";
import EventCard from "../NewComponents/EventCard";
import '../NewComponents/EventCard/EventCard.css'

export default function Card() {
  return (
    <main>
      <h1 className="events">Events</h1>
      <div className="events-container">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </main>
  );
}
