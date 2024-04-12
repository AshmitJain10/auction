const mongoose = require("mongoose");
const schema = mongoose.Schema;

const pollSchema = new schema({
  teamName: String,
  question: String,
  options: [
    {
      category: String,
      votes: { type: Number, default: 0 },
    },
  ],
});

const Poll = mongoose.model("Poll", pollSchema);

module.exports = Poll;
