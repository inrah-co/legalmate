const mongoose = require("mongoose");

const optionsSchema = new mongoose.Schema({
  optimizedResponse: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("Options", optionsSchema);
