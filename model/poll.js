const mongoose = require("mongoose");

const PollSchema = new mongoose.Schema({
  question: {
    type: String,
  },
  options: {
    type: Object,
  },
  type: {
    type: String,
  },
  totalVoters: {
    type: Number,
    default: 0,
  },
});

const Poll = mongoose.model("Poll", PollSchema);

module.exports = Poll;
