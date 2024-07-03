const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
function formatDate(date) {
  return date.toISOString().replace(/T/, ' ').replace(/\..+/, '');
}
// Schema to create a course model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      min_length: 1,
      max_length: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get:formatDate
    },
    reactions : [reactionSchema],
    // reactions: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: 'reaction',
    //   },
    // ], TODO: Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Course = model('thought', thoughtSchema);

module.exports = Thought;
