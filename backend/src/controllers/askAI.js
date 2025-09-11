const { default: chalk } = require("chalk");
const geminiAI = require("../utils/gemeni");
const generatePrompt = require("../utils/generatePrompt");

module.exports = async (req, res) => {
  try {
    const userQuery = req.body.query;
    if (!userQuery) {
      return res.status(400).json({ message: "Query is required." });
    }

    const prompt = await generatePrompt(userQuery);

    // console.log(chalk.green(prompt));

    const geminiAIResponse = await geminiAI(prompt);

    console.log(chalk.green(geminiAIResponse));

    const aiResponse = {
      response: geminiAIResponse,
      query: userQuery,
    };

    res.status(200).json(aiResponse);
  } catch (error) {
    console.log(chalk.red(error));

    return res
      .status(500)
      .json({ message: "Error processing query.", error: error.message });
  }
  // Here you would typically call an AI service to process the query
  // For demonstration purposes, let's assume we have a mock response
};
