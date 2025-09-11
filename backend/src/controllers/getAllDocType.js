const { documentTypes } = require("../constants");

const getAllDocTypes = async (req, res) => {
  try {
    const data = documentTypes;
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving data entries", error });
  }
};

module.exports = getAllDocTypes;
