import React, {useState} from "react";
import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button, Box } from '@chakra-ui/react';
import { useMutation } from '@apollo/client';
import { REMOVE_EVENT } from '../../utils/mutations';
import { QUERY_ME } from "../../utils/queries";


export default function Event({ event }) {
  console.log(event)
  const [eventType, setEventType] = useState('');

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
    }})

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
          <Button  onClick={()=> handleChange(event._id)} variant="solid" colorScheme="blue">
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


