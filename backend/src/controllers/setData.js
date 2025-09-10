const { initEmbedder, textToVector } = require("../utils/vectorUtils");

module.exports = async (req, res) => {
  const { title, description, type } = req.body;

  if (!title || !description || !type) {
    return res
      .status(400)
      .json({ message: "Title, description, and type are required." });
  }

  try {
    const vector = await textToVector(`${title} ${description}`);
    const Data = require("../models/data");
    const newData = new Data({
      title,
      description,
      vector,
      type,
    });

    await newData.save();
    res
      .status(201)
      .json({ message: "Data entry created successfully.", data: newData });
  } catch (error) {
    console.log(error);

    res
      .status(500)
      .json({ message: "Error creating data entry.", error: error.message });
  }
};
