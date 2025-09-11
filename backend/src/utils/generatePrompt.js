const { default: chalk } = require("chalk");
const Data = require("../models/data");
const optimizePrompt = require("./optimizePrompt");
const { textToVector, cosineSimilarity } = require("./vectorUtils");
const options = require("../models/options");

module.exports = async function generatePrompt(userQuery, topK = 1) {
  try {
    const queryVector = await textToVector(`${userQuery}`);

    const allData = await Data.find({});
    const similarities = allData.map((item) => ({
      id: item.id,
      title: item.title || "",
      description: item.description || "",
      score: cosineSimilarity(queryVector, item.vector),
    }));

    similarities.sort((a, b) => b.score - a.score);
    const topChunks = similarities.slice(0, topK);
    let contextText = topChunks
      .map((c) => `${c.text} ${c.description}`)
      .join("\n");
    if (contextText.length === 0) {
      contextText = "No relevant context found.";
    }

    console.log(chalk.yellow(contextText.length));
    const isOptimizePrompt = await options.find({});

    if (
      contextText.length >= 1500 &&
      isOptimizePrompt &&
      isOptimizePrompt[0]?.optimizedResponse
    ) {
      const newPrompt = await optimizePrompt(contextText, queryVector);
      contextText = newPrompt.slice(0, 1500);
      console.error(chalk.red(contextText));
      console.error(chalk.green(contextText.length));
    }

    // if (contextText.length > 1500) {
    //   contextText = contextText.slice(0, 1500);
    // }

    const prompt = `Answer in detail, give only accurate answer, Use ONLY the context below to answer the question.
    - Context: ${contextText}

    - Question: ${userQuery}
    `;
    // const prompt = `Answer in detail, give only accurate answer, Use ONLY the context below to answer the question. If the answer is not in the context, say "Information not available."
    // - Context: ${contextText}

    // - Question: ${query}
    // `;

    return prompt;
  } catch (error) {
    console.error("Error generating prompt:", error);
    throw new Error("Failed to generate prompt");
  }
};
