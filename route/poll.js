const express = require("express");

const { addPoll, updatePoll, getPoll } = require("../controller/poll.js");

const router = express.Router();

router.post("/poll/add", addPoll);
router.put("/poll/:pollId", updatePoll);
router.get("/poll/:pollId", getPoll);

module.exports = router;
