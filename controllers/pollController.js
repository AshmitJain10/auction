const Poll = require("../models/poll");

const pollController = async (req, res) => {
  const { id } = req.params;
  const { teamName, category } = req.body;
  try {
    const poll = await Poll.findById(id);
    const option = poll.options.find((opt) => opt.category === category);
    if (!option) {
      return res.status(404).json({ error: "Category not found" });
    }
    option.votes++;
    await poll.save();
    res.json(poll);
  } catch (error) {
    res.status(500).json({ error: "Failed to vote", message: error.message });
  }
};
module.exports = { pollController };
