const { AuthenticationError } = require('apollo-server-express');
const { User, Event } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('events');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('events');
    },
    events: async (parent,) => {
      // const params = username ? { username } : {};
      return Event.find().sort({ createdAt: -1 });
    },
    event: async (parent, { eventId }) => {
      return Event.findOne({ _id: eventId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('events');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addEvent: async (parent, { location, eventType, date, review }, context) => {
      if (context.user) {
        const event = await Event.create({
          location,
          eventType,
          date,
          reviews: [review],
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { events: event._id } }
        );

        return event;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    addReview: async (parent, { eventId, reviewText }, context) => {
      if (context.user) {
        return Event.findOneAndUpdate(
          { _id: eventId },
          {
            $addToSet: {
              reviews: { reviewText, reviewAuthor: context.user.username },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeEvent: async (parent, { eventId }, context) => {
      if (context.user) {
        const event = await Event.findOneAndDelete({
          _id: eventId,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { events: event._id } }
        );

        return event;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeReview: async (parent, { eventId, reviewId }, context) => {
      if (context.user) {
        return Event.findOneAndUpdate(
          { _id: eventId },
          {
            $pull: {
              reviews: {
                _id: reviewId,
                reviewAuthor: context.user.username,
              },
            },
          },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
