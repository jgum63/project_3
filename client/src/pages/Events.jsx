import React from "react";
import '../NewComponents/EventCard/EventCard.css';
import '../App.css'
import { useState } from 'react';
import { Button, Container } from "@chakra-ui/react";
import AllEventCards from "../NewComponents/EventCard/AllEventCards"
import { useMutation } from '@apollo/client';
import { ADD_EVENT } from '../utils/mutations';
import { QUERY_EVENTS, QUERY_ME } from "../utils/queries";
import { useNavigate } from "react-router-dom";



export default function Card() {
  const [formState, setFormState] = useState({
    date: "",
    eventType: "",
    location: "",
  })
  const navigate = useNavigate();
  // const [addEvent, { error, data }] = useMutation(ADD_EVENT)
  const [addEvent, { error }] = useMutation(ADD_EVENT, {
    update(cache, { data: { addEvent } }) {
      try {
        const { me } = cache.readQuery({ query: QUERY_ME });
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: { ...me, events: [...me.events, addEvent] } },
        });
      } catch (e) {
        console.log(e)
      }
    },
  });
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addEvent({
        variables: { ...formState },
      });
      navigate("/me");
      // Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <main>
      <h1 className="events">Events</h1>
      <div className="events-container">
      </div>
      <Container bg="blue.200" textAlign="center" >


        <h3>Add a New Event</h3>
        <h4>Select your location:</h4>
        <form onSubmit={handleFormSubmit}>
          <select id="myLocation" className="form-input"
            // placeholder="location"
            name="location"
            type="text"
            value={formState.location}
            onChange={handleChange}>
            <option value="Blank">  </option>
            <option value="Key Largo">Key Largo</option>
            <option value="Fiesta Key">Fiesta Key</option>
            <option value="Key West">Key West</option>
            <option value="Long Key">Long Key</option>
            <option value="Marathon Key">Marathon Key</option>
            <option value="Money Key">Money Key</option>
            <option value="No Name Key">No Name Key</option>
          </select>

          <h4>Select your event:</h4>
          <select id="myEvent"
            className="form-input"
            placeholder="eventType"
            name="eventType"
            type="text"
            value={formState.eventType}
            onChange={handleChange}>
            <option value="Blank">  </option>
            <option value="Swimming with Dolphins">Swimming with Dolphins</option>
            <option value="Kayaking">Kayaking</option>
            <option value="Paddle Boarding">Paddle Boarding</option>
            <option value="Beach combing">Beach combing</option>
            <option value="Pool Party">Pool Party</option>
            <option value="Diving and Snorkeling">Diving and Snorkeling</option>
            <option value="Fishing">Fishing</option>
            <option value="Parasailing">Parasailing</option>
            <option value="Golfing">Golfing</option>
            <option value="Dining">Dining</option>
            <option value="Sailing">Sailing</option>
            <option value="Helicopter Ride over Islands">Helicopter Ride over Islands</option>
          </select>
          <h4>Select your date:</h4>


          <input
            className="form-input"
            placeholder="Your date"
            name="date"
            type="text"
            value={formState.date}
            onChange={handleChange}
          />





          <div><Button type="submit">Submit</Button></div>

          <hr></hr>
        </form>
      </Container>

    </main>
  );
}
