const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    events: [Event]!
  }

  type Event {
    _id: ID
    location: String
    eventType: String
    date: Date
    reviews: [Review]!
  }

  type Review {
    _id: ID
    reviewText: String
    reviewAuthor: String
    createdAt: Date
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    events: [Event]
    event(eventId: ID!): Event
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addEvent(location: String!, eventType: String!, date: Date, review: [Review]): Event
    addReview(eventId: ID!, reviewText: String!): Event
    removeEvent(eventId: ID!): Event
    removeReview(eventId: ID!, reviewId: ID!): Event
  }
`;

module.exports = typeDefs;
