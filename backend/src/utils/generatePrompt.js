const Data = require("../models/data");
const { textToVector, cosineSimilarity } = require("./vectorUtils");

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
    const contextText = topChunks
      .map((c) => `${c.text} ${c.description}`)
      .join("\n");

    const prompt = `Answer in detail, give only accurate answer, Use ONLY the context below to answer the question.
    - Context: ${contextText}

    - Question: ${query}
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
