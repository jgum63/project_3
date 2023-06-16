import React from "react";
import EventCard from "../NewComponents/EventCard";
import '../NewComponents/EventCard/EventCard.css';
import { useState } from 'react';
import { Button, Container } from "@chakra-ui/react";


const handleSubmit = () => {
  let dropdown = document.getElementById("myLocation");
  let selectedOption = dropdown.value;
  console.log(selectedOption)

  let dropdown2 = document.getElementById("myEvent");
  let selectedOption2 = dropdown2.value;
  console.log(selectedOption2)

  let input = document.getElementById("myDate")
  let value = input.value;
  console.log(value)
  console.log('you clicked submit')

}


// const handleLocation = () => {
//   const [location, setLocation] = useState('');
//   console.log(location)
// }



export default function Card() {
  return (
    <main>
      <h1 className="events">Events</h1>
      <div className="events-container">
      </div>
      <Container bg="blue.200" textAlign="center" >


        <h3>Add a New Event</h3>
        <h4>Select your location:</h4>
        <form action="" method="">

          <select id="myLocation">
            <option value="Blank">  </option>
            <option value="Key Largo">Key Largo</option>
            <option value="Fiesta Key">Fiesta Key</option>
            <option value="Key West">Key West</option>
            <option value="Long Key">Long Key</option>
            <option value="Marathon Key">Marathon Key</option>
            <option value="Money Key">Money Key</option>
            <option value="No Name Key">No Name Key</option>
          </select>
        </form>

        <h4>Select your event:</h4>

        <form action="" method="">
          <select id="myEvent">
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
            <option value="Fishing">Fishing</option>
          </select>
          <br></br>
          <h4>Select your date:</h4>
          <input type="text" id="myDate" placeholder="Enter your date" />

          <div><Button onClick={handleSubmit}>Submit</Button></div>

          <hr></hr>
        </form>
      </Container>

    </main>
  );
}
