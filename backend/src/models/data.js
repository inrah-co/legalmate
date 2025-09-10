const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  vector: {
    type: [Number],
    required: true,
  },
  type: {
    type: String,
    enum: ["Constitution", "Indian union law", "state law"],
    required: true,
  },
});

module.exports = mongoose.model("Data", dataSchema);
