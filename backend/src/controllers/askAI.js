const geminiAI = require("../utils/gemeni");
const generatePrompt = require("../utils/generatePrompt");

module.exports = async (req, res) => {
  try {
    const userQuery = req.body.query;
    if (!userQuery) {
      return res.status(400).json({ message: "Query is required." });
    }
    const prompt = await generatePrompt(userQuery);

    const geminiAIResponse = await geminiAI(prompt);

    const aiResponse = {
      response: geminiAIResponse,
      query: userQuery,
    };

    res.status(200).json(aiResponse);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error processing query.", error: error.message });
  }
  // Here you would typically call an AI service to process the query
  // For demonstration purposes, let's assume we have a mock response
};
