import React from 'react';
import { Link } from 'react-router-dom';
import EventCard from '../../NewComponents/EventCard'
import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button, Flex} from '@chakra-ui/react';

const EventList = ({
  events,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!events.length) {
    return <h3>No Thoughts Yet</h3>;
  }

  return (
    <Flex>
      {showTitle && <h3>{title}</h3>}
      {events &&
        events.map((event) => (

            
          <EventCard event={event} />
   
          // <div key={event._id} className="card mb-3">
          //   <h4 className="card-header bg-primary text-light p-2 m-0">
          //     {showUsername ? (
          //       <Link
          //         className="text-light"
          //         to={`/profiles/${event.reviewAuthor}`}
          //       >
          //         {event.reviewAuthor} <br />
          //         <span style={{ fontSize: '1rem' }}>
          //           had this thought on {event.createdAt}
          //         </span>
          //       </Link>
          //     ) : (
          //       <>
          //         <span style={{ fontSize: '1rem' }}>
          //           You had this thought on {event.createdAt}
          //         </span>
          //       </>
          //     )}
          //   </h4>
          //   <div className="card-body bg-light p-2">
          //     <p>{event.reviewText}</p>
          //   </div>
          //   <Link
          //     className="btn btn-primary btn-block btn-squared"
          //     to={`/events/${event._id}`}
          //   >
          //     Join the discussion on this thought.
          //   </Link>
          // </div>
        ))}
  </Flex>
  );
};

export default EventList;
