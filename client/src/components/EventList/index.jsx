import React from 'react';
import { Link } from 'react-router-dom';
import EventCard from '../../NewComponents/EventCard'
import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button, Flex, Grid, GridItem, useBreakpointValue } from '@chakra-ui/react';

const EventList = ({
  events,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!events.length) {
    return <h3>No Thoughts Yet</h3>;
  }
  const templateColumns = useBreakpointValue({
    base: 'repeat(1, 1fr)',
    md: 'repeat(3, 1fr)'
  }, { ssr: false })

  return (
    <Flex>
      {showTitle && <h3>{title}</h3>}
      <Grid templateColumns={templateColumns} gap={8}>
        {events &&
          events.map((event) => {
            // console.log(event)

            return (<GridItem w='100%'  >
              <EventCard event={event} />
            </GridItem>
            )
          }


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
          )}
      </Grid>
    </Flex>
  );
};

export default EventList;
