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
    comments: [Comment]!
  }

  type Review {
    _id: ID
    reviewText: String
    reviewAuthor: String
    eventType: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    events(username: String): [Thought]
    event(thoughtId: ID!): Thought
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
