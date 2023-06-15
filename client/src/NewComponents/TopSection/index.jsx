import React from "react";
import "./TopSection.css";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

function TopSection() {
  return (
    <div className="top-container">
      <h1>Events Awaiting You</h1>
      <p>What are you waiting for?</p>
      {Auth.loggedIn() ? (
        <>
          <Link to="/me">
            <Button colorScheme="blackAlpha" size="lg">
              Check Out My Events
            </Button>
          </Link>
        </>
      ) : (
        <Link to="/signup">
          <Button colorScheme="blackAlpha" size="lg">
            Book Now
          </Button>
        </Link>
      )}
    </div>
  );
}

export default TopSection;
