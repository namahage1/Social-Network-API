const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

function formatDate(date) {
  return date.toISOString().replace(/T/, ' ').replace(/\..+/, '');
}

// Schema to create a thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280
    },
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: formatDate
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// thoughtSchema.virtual('reactionCount').get(function() {
//   return this.reactions.length;
// });

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
