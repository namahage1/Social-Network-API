const connection = require('../config/connection');
const { User, Thought } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

    // Delete the collections if they exist
    let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    if (userCheck.length) {
      await connection.dropCollection('users');
    }

    let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
    if (thoughtCheck.length) {
      await connection.dropCollection('thoughts');
    }

  // Create empty array to hold the users
  const users = usernames.map(username => ({
    username,
    email: `${username}@test.com`,
    thoughts: [],
    friends: []
  }));

    // Insert users into the database
    const userData = await User.create(users);

    // Create random thoughts
    const thoughts = getRandomThoughts(5);
  
    // Insert thoughts into the database
    const thoughtData = await Thought.create(thoughts);

    // Update users with thought IDs
    for (let i = 0; i < thoughtData.length; i++) {
      const user = await User.findOneAndUpdate(
        { username: thoughtData[i].username },
        { $addToSet: { thoughts: thoughtData[i]._id } },
        { new: true }
      );
    }

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.table(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
