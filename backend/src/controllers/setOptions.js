const { set } = require("mongoose");
const Options = require("../models/options");

const setOptions = async (req, res) => {
  const options = req.body;
  console.log(req.body);

  try {
    const newOptions = await Options.findOneAndUpdate(
      {},
      { $set: { ...options } },
      { upsert: true }
    );

    if (!newOptions) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "Settings updated successfully",
      settings: newOptions,
    });
  } catch (error) {
    console.log(error);

    res
      .status(500)
      .json({ message: "Error updating settings", error: error.message });
  }
};

module.exports = setOptions;
