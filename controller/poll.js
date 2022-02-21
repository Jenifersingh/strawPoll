const Poll = require("../model/poll");

const addPoll = (req, res) => {
  const poll = new Poll(req.body);

  poll.save().then(
    (data) => {
      return res.status(200).json(data);
    },
    (err) => {
      return res.status(400).json({ error: "Cannot able to create this poll" });
    }
  );
};

const updatePoll = (req, res) => {
  const { pollId } = req.params;

  Poll.findByIdAndUpdate(pollId, req.body).exec((err, data) => {
    if (err || !data) {
      return res.status(400).json({ error: "Cannot update poll data" });
    }

    res.status(200).json({ message: "Poll updated successfully" });
  });
};

const getPoll = (req, res) => {
  const { pollId } = req.params;
  Poll.findOne({ _id: pollId }).exec((err, data) => {
    if (err || !data) {
      return res.status(400).json({ error: "Poll not found" });
    }

    console.log(data);

    return res.status(200).json(data);
  });
};

module.exports = { addPoll, updatePoll, getPoll };
