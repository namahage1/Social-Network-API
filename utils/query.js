const connection = require('../config/connection');
const { User, Thought } = require('../models');


async function main() {
    const allUsers = await User.find()

    const allThoughts = await Thought.find()

    console.log(allUsers);
    console.log(allThoughts)
}

main();