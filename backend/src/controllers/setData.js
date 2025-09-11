const Data = require("../models/data");
const isDocExist = require("../utils/isDocExist");
const { textToVector } = require("../utils/vectorUtils");

module.exports = async (req, res) => {
  const { title, description, type } = req.body;

  if (!title || !description || !type) {
    return res
      .status(400)
      .json({ message: "Title, description, and type are required." });
  }

  try {
    const vector = await textToVector(`${title} ${description}`);

    /// TODO: enable this to avoid duplicates
    // const oldDoc = await isDocExist(vector, type);
    // if (oldDoc.exists) {
    //   return res.status(409).json({
    //     message: "Document already exists.",
    //     data: { title, description, type },
    //     oldData: {
    //       title: oldDoc.bestMatch.title || "",
    //       description: oldDoc.bestMatch.description || "",
    //       type: oldDoc.bestMatch.type || "",
    //     },
    //     score: oldDoc.bestScore,
    //     oldRawData: oldDoc.bestMatch,
    //   });
    // }

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
