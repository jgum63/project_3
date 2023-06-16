import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_EVENT = gql`
 mutation Mutation($location: String!, $eventType: String!, $date: String) {
  addEvent(location: $location, eventType: $eventType, date: $date) {
    _id
    date
    eventType
    location
    reviews {
      _id
      createdAt
      reviewAuthor
      reviewText
    }
  }
}
`;

export const ADD_REVIEW = gql`
  mutation addComment($reviewId: ID!, $reviewText: String!) {
    addReview(reviewId: $reviewId, reviewText: $reviewText) {
      _id
      eventType
      location
      date
      review {
        _id
        reviewText
        reviewAuthor
        createdAt
      }
    }
  }
`;

export const REMOVE_EVENT = gql`
      mutation Mutation($eventId: ID!) {
      removeEvent(eventId: $eventId) {
        _id
        date
        eventType
        location
      }
    }
  
`;


