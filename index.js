const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const pollRouter = require("./route/poll.js");
const authRouter = require("./route/auth.js");

const app = express();

app.use(cors());
app.use(express.json());

app.use(pollRouter);
app.use(authRouter);

app.listen(8000, () => {
  console.log("APP CONNECTED");
});

mongoose.connect("mongodb://localhost:27017/Poll", () => {
  console.log("DB CONNECTED");
});
