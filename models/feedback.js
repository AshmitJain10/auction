const mongoose = require("mongoose");
const schema = mongoose.Schema;
const feedbackSchema = new schema(
  {
    userId: {
      type: String,
      required: true,
      trim: true,
    },
    feedbackDesc: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Feedback = mongoose.model("feedback", feedbackSchema);

module.exports(Feedback);
S;
