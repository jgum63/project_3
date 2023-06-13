const db = require('../config/connection');
let { ObjectId } = require("mongodb")
const { User, Event, EventType, Location } = require('../models');
const userSeeds = require('./userSeeds.json');
const locationSeeds = require('./locationSeeds.json');
const eventTypeSeeds = require('./eventTypeSeeds.json');
const { events } = require('../models/User');
// const eventSeeds = require('./eventSeeds.json');

db.once('open', async () => {
  try {
    await Event.deleteMany({});
    await User.deleteMany({});
    await Location.deleteMany({});
    await EventType.deleteMany({})

    await User.create(userSeeds);
    let eventTypeIds = []
    let locationIds = []
    for (let i = 0; i < eventTypeSeeds.length; i++) {
      const { _id, eventType } = await EventType.create(eventTypeSeeds[i]);

      console.log("_id:", _id, "EventType:", eventType)
      eventTypeIds.push(_id)
    }
    for (let i = 0; i < locationSeeds.length; i++) {
      const { _id, location } = await Location.create(locationSeeds[i]);

      console.log("_id:", _id, "location:", location)
      locationIds.push(_id)
    }

    for (let i = 0; i < 5; i++) {

      // events look like 
      // location objId // is going to be an object id
      // eventType objId // is going to be an object id
      // eventDate string/date
      // reviews string
      let newEvent = {
        location: new ObjectId(locationIds[i]._id),
        eventType: new ObjectId(eventTypeIds[i]._id),
        eventDate: "7/4/2023",
        // reviews: eventSeeds[i].review
      }
      console.log(newEvent)
      const event = await Event.create(newEvent);
      console.log(event)
      // console.log("_id:", _id, "EventType:", eventType)
      // eventTypeIds.push(_id)
    }
    // const user = await User.findOneAndUpdate(
    //   { username: eventAuthor },
    //   {
    //     $addToSet: {
    //       events: _id,
    //     },
    //   }
    // );

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
