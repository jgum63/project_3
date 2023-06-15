import React from "react";
import './TopSection.css';
import { Button } from '@chakra-ui/react'
import { Link } from "react-router-dom";


function TopSection() {
    return (
        <div className='top-container'>
            <h1>Events Awaiting You</h1>
            <p>What are you waiting for?</p>
            <Link to='/signup'>
            <Button colorScheme='blackAlpha' size='lg'>Book Now</Button>
            </Link>
        </div>
    )
}

export default TopSection