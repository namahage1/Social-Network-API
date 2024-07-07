const usernames = [
  'testuser1',
  'testuser2',
  'testuser3',
  'testuser4',
  'testuser5',
  'testuser6'
];

const thoughtsText = [
  'This is a thought from John.',
  'This is a thought from Jane.',
  'This is a thought from Alice.',
  'This is a thought from Bob.',
  'This is a thought from Charlie.',
  'This is a thought from David.'
];

const reactionText = [
  'Great thought!',
  'Interesting!',
  'Nice one!',
  'Well said!',
  'I agree!',
  'Awesome!'
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
