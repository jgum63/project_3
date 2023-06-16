import React from "react";
import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button, Box } from '@chakra-ui/react';


function Event({ event }) {
  console.log(event)
  return (
    <Card>

      {/* < maxW="sm"> */}
      <CardBody>
        <Image
          src="images/Kayaking.png"
          alt=""
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
          <Button variant="solid" colorScheme="blue">
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

export default Event;
