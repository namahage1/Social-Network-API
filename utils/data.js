const usernames = [
  'testuser1',
  'testuser2',
  'testuser3',
  'testuser4',
  'testuser5',
  'testuser6'
];

const thoughtsText = [
  'This is a thought 1',
  'This is a thought 2',
  'This is a thought 3',
  'This is a thought 4',
  'This is a thought 5',
  'This is a thought 6'
];

const reactionText = [
  'This is reaction 1',
  'This is reaction 2',
  'This is reaction 3',
  'This is reaction 4',
  'This is reaction 5',
  'This is reaction 6'
];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Function to generate random thoughts
const getRandomThoughts = (int) => {
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      thoughtText: getRandomArrItem(thoughtsText),
      username: getRandomArrItem(usernames),
      reactions: getRandomReactions(3)
    });
  }
  return results;
};

// Function to generate random reactions
const getRandomReactions = (int) => {
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      reactionBody: getRandomArrItem(reactionText),
      username: getRandomArrItem(usernames)
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomArrItem, getRandomThoughts, getRandomReactions, usernames };
