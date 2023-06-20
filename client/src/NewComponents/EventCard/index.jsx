import React, { useState } from "react";
import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button, Box } from '@chakra-ui/react';
import { useMutation } from '@apollo/client';
import { REMOVE_EVENT } from '../../utils/mutations';
import { QUERY_ME } from "../../utils/queries";


export default function Event({ event }) {
  console.log(event)
  const [eventType, setEventType] = useState('');
  let img = "";

  switch (event.eventType) {
    case "Swimming with Dolphins":
      img = "images/SwimmingWithDolphins.png"
      break;
    case "Kayaking":
      img = "images/Kayaking.png"
      break;
    case "Paddle Boarding":
      img = "images/PaddleBoarding.png"
      break;
    case "Beach combing":
      img = "images/Beachcombing.png"
      break;
    case "Pool Party":
      img = "images/PoolParty.png"
      break;
    case "Diving and Snorkeling":
      img = "images/DivingSnorkeling.png"
      break;
    case "Fishing":
      img = "images/Fishing.png"
      break;
    case "Parasailing":
      img = "images/Parasailing.png"
      break;
    case "Golfing":
      img = "images/Golfing.png"
      break;
    case "Dining":
      img = "images/Dining.png"
      break;
    case "Sailing":
      img = "images/Sailing.png"
      break;
    case "Helicopter Ride over Islands":
      img = "Helicopter.png"
      break;

    default:
      img = "images/Kayaking.png"
      break;
  }
  const [removeEvent, { error }] = useMutation(REMOVE_EVENT, {
    update(cache, { data: { removeEvent } }) {
      try {

        cache.writeQuery({
          query: QUERY_ME,
          data: { me: removeEvent },
        });
      } catch (e) {
        console.error(e);
      }
    }
  })

  const handleChange = async (id) => {


    try {
      const { data } = await removeEvent({
        variables: {
          eventId: id,
        },
      });

      setEventType('');
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <Card>

      {/* < maxW="sm"> */}
      <CardBody>
        <Image
          src={img}
          alt={event.eventType}
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{event.location}</Heading>
          <Heading size="md">{event.eventType}</Heading>
          <Heading size="md">{event.date}</Heading>
          <Heading size="md">{event.review}</Heading>


        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button onClick={() => handleChange(event._id)} variant="solid" colorScheme="blue">
            Delete Event
          </Button>
          <Button variant="solid" colorScheme="blue">
            Add Review
          </Button>
        </ButtonGroup>
      </CardFooter>
      {/* </> */}
    </Card >
  );
}


