import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      events {
        _id
        location
        eventType
        date
        reviews{
        reviewText
        reviewAuthor
        createdAt
        }
      }
    }
  }
`;

export const QUERY_USERS = gql`
  query users {
    users {
      _id
      username
      email
      events {
        _id
        location
        eventType
        date
        reviews{
        reviewText
        reviewAuthor
        createdAt
        }
      }
    }
  }
`;

export const QUERY_EVENTS = gql`
  query events {
    events {
      _id
        location
        eventType
        date
        reviews{
        reviewText
        reviewAuthor
        createdAt
        }
    }
  }
`;

export const QUERY_SINGLE_EVENT = gql`
  query event($eventId: ID!) {
    event(eventId: $eventId) {
      _id
        location
        eventType
        date
        reviews{
        reviewText
        reviewAuthor
        createdAt
        }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      events {
        _id
        location
        eventType
        date
        reviews{
        reviewText
        reviewAuthor
        createdAt
        }
      }
    }
  }
`;
