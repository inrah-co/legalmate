const Options = require("../models/options");

const getOptions = async (req, res) => {
  try {
    const options = await Options.find({});
    console.log(options);

    if (!options) {
      return res.status(404).json({ message: "Options not found" });
    }
    res.status(200).json(options);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = getOptions;
